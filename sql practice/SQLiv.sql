CREATE TABLE tb_currency(
    CurrencyID UNIQUEIDENTIFIER PRIMARY KEY,
    CurrencyCode NVARCHAR(3),
    CurrencyDescription NVARCHAR(255),
    Country NVARCHAR(255)
);

INSERT INTO tb_currency(CurrencyID,CurrencyCode,CurrencyDescription,Country)
VALUES ('123','RM','Ringgit Malaysia','Malaysia'),('321','USD','United States Dollar','United States of America');

SELECT * FROM tb_currency;

UPDATE tb_currency SET CurrencyDescription = 'Ringgit Malaysia(Updated 2024)'
WHERE CurrencyCode = 'RM';

CREATE PROCEDURE ListFruits(
    @FruitID UNIQUEIDENTIFIER = NULL
)
IF @FruitID IS NULL
BEGIN
    SELECT f.*, u.UOMDescription, c.CurrencyCode
    FROM tb_fruit f
    LEFT JOIN tb_uom u ON f.UOMID = u.UOMID
    LEFT JOIN tb_currency c ON f.CurrencyID = c.CurrencyID;
END
ELSE
BEGIN
    SELECT f.*, u.UOMDescription, c.CurrencyCode
    FROM tb_fruit f
    LEFT JOIN tb_uom u ON f.UOMID = u.UOMID
    LEFT JOIN tb_currency c ON f.CurrencyID = c.CurrencyID
    WHERE f.FruitID = @FruitID;
END
CREATE PROCEDURE DeleteFruit
(
    @FruitID UNIQUEIDENTIFIER
)
AS
BEGIN
    DELETE FROM tb_fruit
    WHERE FruitID = @FruitID;
END;




ALTER FUNCTION fn_total_price{
    @FruitID UNIQUEIDENTIFIER
}
RETURNS DECIMAL(18,2)
AS 
BEGIN
    DECLARE @TotalPrice DECIMAL(18,2);
    SELECT @TotalPrice = (f.Quantity * f.Price),c.CurrencyCode
    FROM tb_fruit
    INNER JOIN tb_currency c on f.CurrencyID = c.CurrencyID
    WHERE f.FruitID= @FruitID;
    RETURNS @TotalPrice;
    END;

CREATE PROCEDURE pr_fruit_save
    @FruitID UNIQUEIDENTIFIER,
    @Name NVARCHAR(255),
    @Quantity INT,
    @Price DECIMAL(18, 2),
    @CurrencyCode NVARCHAR(3)
AS
BEGIN
    -- Check if the provided currency code exists in tb_currency
    IF NOT EXISTS (SELECT 1 FROM tb_currency WHERE CurrencyCode = @CurrencyCode)
    BEGIN
        PRINT 'Error: Currency code does not exist in tb_currency.';
        RETURN;
    END

    -- Insert or update the fruit record
    MERGE INTO tb_fruit AS target
    USING (VALUES (@FruitID, @Name, @Quantity, @Price, @CurrencyCode)) AS source (FruitID, Name, Quantity, Price, CurrencyCode)
    ON target.FruitID = source.FruitID
    WHEN MATCHED THEN
        UPDATE SET Name = source.Name, Quantity = source.Quantity, Price = source.Price, CurrencyID = (SELECT CurrencyID FROM tb_currency WHERE CurrencyCode = source.CurrencyCode)
    WHEN NOT MATCHED THEN
        INSERT (FruitID, Name, Quantity, Price, CurrencyID)
        VALUES (source.FruitID, source.Name, source.Quantity, source.Price, (SELECT CurrencyID FROM tb_currency WHERE CurrencyCode = source.CurrencyCode));
END;
