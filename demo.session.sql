-- USE demo;
-- CREATE TABLE IF NOT EXISTS transactiondetails
-- (
--     transactionid INT,
--     itemnumber INT,
--     quanitty DECIMAL(10, 3),
--     price DECIMAL(10, 2),
--     salesvalue DECIMAL(10, 2),
--     FOREIGN KEY (itemnumber) REFERENCES goodsmaster (itemnumber)
-- );
INSERT INTO demo.transactiondetails(
        transactionid,
        itemnumber,
        quanitty,
        price,
        salesvalue
    )
VALUES (1, 1, 1.000, 89.00, 89.00),
    (1, 2, 2.000, 5.00, 10.00),
    (2, 1, 2.000, 89.00, 178.00),
    (3, 2, 10.000, 5.00, 50.00);
-- SELECT * FROM demo.transactiondetails;
-- 查询单笔销售额超过50的商品名称
SELECT g.goodsname
FROM goodsmaster AS g
    INNER JOIN transactiondetails AS t ON g.itemnumber = t.itemnumber
WHERE t.salesvalue > 50.00;
SELECT g.goodsname
FROM goodsmaster AS g
    INNER JOIN transactiondetails AS t ON g.itemnumber = t.itemnumber
GROUP BY g.goodsname
HAVING max(g.salesprice) > 50.00;
SELECT DISTINCT g.goodsname
FROM goodsmaster AS g
    INNER JOIN transactiondetails AS t ON g.itemnumber = t.itemnumber
WHERE t.salesvalue > 50.00;
-- 每天的销售数量和销售金额
SELECT t.transactiondate,
    SUM(t.quanitty) AS quanitty,
    SUM(t.salesvalue) AS salesvalue
FROM transactiondetails AS t
GROUP BY t.transactiondate;