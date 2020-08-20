
const apiKey = '907C0580-5FA2-4B94-AA1B-205B598EE4CA';
let period_id = "1DAY";
let coin_name = 'BTC'
const time_end = moment().format();
let time_start = moment().subtract(1, 'months').format();
let queryURL = `https://rest.coinapi.io/v1/ohlcv/${coin_name}/USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;

const exResponse = [
    {
        "time_period_start": "2020-08-10T00:00:00.0000000Z",
        "time_period_end": "2020-08-10T03:00:00.0000000Z",
        "time_open": "2020-08-10T00:00:02.7831780Z",
        "time_close": "2020-08-10T02:59:58.8271000Z",
        "price_open": 11688.250000000,
        "price_high": 12099.000000000,
        "price_low": 11684.600000000,
        "price_close": 12012.000000000,
        "volume_traded": 7736.959089061,
        "trades_count": 34905
    },
    {
        "time_period_start": "2020-08-10T03:00:00.0000000Z",
        "time_period_end": "2020-08-10T06:00:00.0000000Z",
        "time_open": "2020-08-10T03:00:00.1643220Z",
        "time_close": "2020-08-10T05:59:58.1130000Z",
        "price_open": 12012.000000000,
        "price_high": 12087.790000000,
        "price_low": 11941.200000000,
        "price_close": 11979.200000000,
        "volume_traded": 5085.793205732,
        "trades_count": 23516
    },
    {
        "time_period_start": "2020-08-10T06:00:00.0000000Z",
        "time_period_end": "2020-08-10T09:00:00.0000000Z",
        "time_open": "2020-08-10T06:00:00.7860840Z",
        "time_close": "2020-08-10T08:59:58.5120000Z",
        "price_open": 11983.990000000,
        "price_high": 12030.300000000,
        "price_low": 11958.260000000,
        "price_close": 11993.780000000,
        "volume_traded": 2373.557730737,
        "trades_count": 12852
    },
    {
        "time_period_start": "2020-08-10T09:00:00.0000000Z",
        "time_period_end": "2020-08-10T12:00:00.0000000Z",
        "time_open": "2020-08-10T09:00:00.3625730Z",
        "time_close": "2020-08-10T11:59:58.3260000Z",
        "price_open": 11988.540000000,
        "price_high": 12014.150000000,
        "price_low": 11470.010000000,
        "price_close": 11745.200000000,
        "volume_traded": 7699.878683445,
        "trades_count": 26082
    },
    {
        "time_period_start": "2020-08-10T12:00:00.0000000Z",
        "time_period_end": "2020-08-10T15:00:00.0000000Z",
        "time_open": "2020-08-10T12:00:01.9450000Z",
        "time_close": "2020-08-10T14:59:59.9340000Z",
        "price_open": 11744.750000000,
        "price_high": 11988.690000000,
        "price_low": 11715.000000000,
        "price_close": 11908.290000000,
        "volume_traded": 5112.949168892,
        "trades_count": 23636
    },
    {
        "time_period_start": "2020-08-10T15:00:00.0000000Z",
        "time_period_end": "2020-08-10T18:00:00.0000000Z",
        "time_open": "2020-08-10T15:00:00.5824340Z",
        "time_close": "2020-08-10T17:59:59.5607700Z",
        "price_open": 11906.570000000,
        "price_high": 11973.990000000,
        "price_low": 11811.260000000,
        "price_close": 11899.010000000,
        "volume_traded": 5432.753072428,
        "trades_count": 25686
    },
    {
        "time_period_start": "2020-08-10T18:00:00.0000000Z",
        "time_period_end": "2020-08-10T21:00:00.0000000Z",
        "time_open": "2020-08-10T18:00:00.1720000Z",
        "time_close": "2020-08-10T20:59:59.8602910Z",
        "price_open": 11892.700000000,
        "price_high": 11926.210000000,
        "price_low": 11778.270000000,
        "price_close": 11863.320000000,
        "volume_traded": 3512.525631101,
        "trades_count": 21581
    },
    {
        "time_period_start": "2020-08-10T21:00:00.0000000Z",
        "time_period_end": "2020-08-11T00:00:00.0000000Z",
        "time_open": "2020-08-10T21:00:00.3265390Z",
        "time_close": "2020-08-10T23:59:59.7180770Z",
        "price_open": 11863.320000000,
        "price_high": 11906.570000000,
        "price_low": 11770.000000000,
        "price_close": 11899.730000000,
        "volume_traded": 8230.814728669,
        "trades_count": 65470
    },
    {
        "time_period_start": "2020-08-11T00:00:00.0000000Z",
        "time_period_end": "2020-08-11T03:00:00.0000000Z",
        "time_open": "2020-08-11T00:00:01.1553860Z",
        "time_close": "2020-08-11T02:59:59.9326730Z",
        "price_open": 11899.870000000,
        "price_high": 11948.550000000,
        "price_low": 11859.700000000,
        "price_close": 11863.830000000,
        "volume_traded": 2514.823448554,
        "trades_count": 18829
    },
    {
        "time_period_start": "2020-08-11T03:00:00.0000000Z",
        "time_period_end": "2020-08-11T06:00:00.0000000Z",
        "time_open": "2020-08-11T03:00:00.2261900Z",
        "time_close": "2020-08-11T05:59:59.5466500Z",
        "price_open": 11863.830000000,
        "price_high": 11886.240000000,
        "price_low": 11808.500000000,
        "price_close": 11859.450000000,
        "volume_traded": 2036.589617605,
        "trades_count": 15473
    },
    {
        "time_period_start": "2020-08-11T06:00:00.0000000Z",
        "time_period_end": "2020-08-11T09:00:00.0000000Z",
        "time_open": "2020-08-11T06:00:01.2236470Z",
        "time_close": "2020-08-11T08:59:58.7163020Z",
        "price_open": 11859.450000000,
        "price_high": 11863.860000000,
        "price_low": 11706.000000000,
        "price_close": 11718.610000000,
        "volume_traded": 3929.739384768,
        "trades_count": 17191
    },
    {
        "time_period_start": "2020-08-11T09:00:00.0000000Z",
        "time_period_end": "2020-08-11T12:00:00.0000000Z",
        "time_open": "2020-08-11T09:00:00.1640000Z",
        "time_close": "2020-08-11T11:59:57.8460000Z",
        "price_open": 11711.100000000,
        "price_high": 11775.810000000,
        "price_low": 11650.000000000,
        "price_close": 11755.000000000,
        "volume_traded": 3515.569659045,
        "trades_count": 16881
    },
    {
        "time_period_start": "2020-08-11T12:00:00.0000000Z",
        "time_period_end": "2020-08-11T15:00:00.0000000Z",
        "time_open": "2020-08-11T12:00:00.0660000Z",
        "time_close": "2020-08-11T14:59:59.6552860Z",
        "price_open": 11756.400000000,
        "price_high": 11756.400000000,
        "price_low": 11526.960000000,
        "price_close": 11574.750000000,
        "volume_traded": 7301.186901588,
        "trades_count": 33224
    },
    {
        "time_period_start": "2020-08-11T15:00:00.0000000Z",
        "time_period_end": "2020-08-11T18:00:00.0000000Z",
        "time_open": "2020-08-11T15:00:01.7715540Z",
        "time_close": "2020-08-11T17:59:59.1694710Z",
        "price_open": 11574.750000000,
        "price_high": 11583.300000000,
        "price_low": 11280.000000000,
        "price_close": 11494.340000000,
        "volume_traded": 11234.068987617,
        "trades_count": 48499
    },
    {
        "time_period_start": "2020-08-11T18:00:00.0000000Z",
        "time_period_end": "2020-08-11T21:00:00.0000000Z",
        "time_open": "2020-08-11T18:00:00.6858540Z",
        "time_close": "2020-08-11T20:59:59.8790000Z",
        "price_open": 11493.710000000,
        "price_high": 11501.830000000,
        "price_low": 11130.000000000,
        "price_close": 11201.270000000,
        "volume_traded": 6743.275264513,
        "trades_count": 37347
    },
    {
        "time_period_start": "2020-08-11T21:00:00.0000000Z",
        "time_period_end": "2020-08-12T00:00:00.0000000Z",
        "time_open": "2020-08-11T21:00:00.2990000Z",
        "time_close": "2020-08-11T23:59:59.8155570Z",
        "price_open": 11202.380000000,
        "price_high": 11423.420000000,
        "price_low": 11120.000000000,
        "price_close": 11388.530000000,
        "volume_traded": 4452.808091594,
        "trades_count": 29661
    },
    {
        "time_period_start": "2020-08-12T00:00:00.0000000Z",
        "time_period_end": "2020-08-12T03:00:00.0000000Z",
        "time_open": "2020-08-12T00:00:01.0499140Z",
        "time_close": "2020-08-12T02:59:59.3663090Z",
        "price_open": 11388.880000000,
        "price_high": 11418.060000000,
        "price_low": 11220.000000000,
        "price_close": 11248.790000000,
        "volume_traded": 2682.311701125,
        "trades_count": 22370
    },
    {
        "time_period_start": "2020-08-12T03:00:00.0000000Z",
        "time_period_end": "2020-08-12T06:00:00.0000000Z",
        "time_open": "2020-08-12T03:00:00.7527190Z",
        "time_close": "2020-08-12T05:59:59.9110000Z",
        "price_open": 11248.790000000,
        "price_high": 11402.660000000,
        "price_low": 11234.310000000,
        "price_close": 11258.510000000,
        "volume_traded": 1983.563517414,
        "trades_count": 15672
    },
    {
        "time_period_start": "2020-08-12T06:00:00.0000000Z",
        "time_period_end": "2020-08-12T09:00:00.0000000Z",
        "time_open": "2020-08-12T06:00:00.1840280Z",
        "time_close": "2020-08-12T08:59:58.1867160Z",
        "price_open": 11260.640000000,
        "price_high": 11498.500000000,
        "price_low": 11148.540000000,
        "price_close": 11434.820000000,
        "volume_traded": 4141.079735747,
        "trades_count": 18073
    },
    {
        "time_period_start": "2020-08-12T09:00:00.0000000Z",
        "time_period_end": "2020-08-12T12:00:00.0000000Z",
        "time_open": "2020-08-12T09:00:00.3636800Z",
        "time_close": "2020-08-12T11:59:59.7401720Z",
        "price_open": 11434.820000000,
        "price_high": 11540.720000000,
        "price_low": 11434.820000000,
        "price_close": 11467.910000000,
        "volume_traded": 2330.504813766,
        "trades_count": 14065
    },
    {
        "time_period_start": "2020-08-12T12:00:00.0000000Z",
        "time_period_end": "2020-08-12T15:00:00.0000000Z",
        "time_open": "2020-08-12T12:00:00.2740000Z",
        "time_close": "2020-08-12T14:59:59.6233170Z",
        "price_open": 11469.100000000,
        "price_high": 11605.320000000,
        "price_low": 11430.490000000,
        "price_close": 11596.960000000,
        "volume_traded": 3921.763503609,
        "trades_count": 23373
    },
    {
        "time_period_start": "2020-08-12T15:00:00.0000000Z",
        "time_period_end": "2020-08-12T18:00:00.0000000Z",
        "time_open": "2020-08-12T15:00:00.5579990Z",
        "time_close": "2020-08-12T17:59:58.3474150Z",
        "price_open": 11596.950000000,
        "price_high": 11635.120000000,
        "price_low": 11482.740000000,
        "price_close": 11542.300000000,
        "volume_traded": 4072.456028643,
        "trades_count": 24846
    },
    {
        "time_period_start": "2020-08-12T18:00:00.0000000Z",
        "time_period_end": "2020-08-12T21:00:00.0000000Z",
        "time_open": "2020-08-12T18:00:00.7328270Z",
        "time_close": "2020-08-12T20:59:59.7950130Z",
        "price_open": 11542.310000000,
        "price_high": 11616.140000000,
        "price_low": 11496.910000000,
        "price_close": 11567.710000000,
        "volume_traded": 3034.764082047,
        "trades_count": 22987
    },
    {
        "time_period_start": "2020-08-12T21:00:00.0000000Z",
        "time_period_end": "2020-08-13T00:00:00.0000000Z",
        "time_open": "2020-08-12T21:00:00.7371720Z",
        "time_close": "2020-08-12T23:59:59.4411140Z",
        "price_open": 11567.710000000,
        "price_high": 11596.390000000,
        "price_low": 11486.110000000,
        "price_close": 11566.450000000,
        "volume_traded": 2427.114073036,
        "trades_count": 20005
    },
    {
        "time_period_start": "2020-08-13T00:00:00.0000000Z",
        "time_period_end": "2020-08-13T03:00:00.0000000Z",
        "time_open": "2020-08-13T00:00:01.0252260Z",
        "time_close": "2020-08-13T02:59:58.9054930Z",
        "price_open": 11566.440000000,
        "price_high": 11675.520000000,
        "price_low": 11531.600000000,
        "price_close": 11571.260000000,
        "volume_traded": 2821.020225283,
        "trades_count": 22393
    },
    {
        "time_period_start": "2020-08-13T03:00:00.0000000Z",
        "time_period_end": "2020-08-13T06:00:00.0000000Z",
        "time_open": "2020-08-13T03:00:02.1187080Z",
        "time_close": "2020-08-13T05:59:57.9832560Z",
        "price_open": 11576.410000000,
        "price_high": 11599.690000000,
        "price_low": 11520.000000000,
        "price_close": 11536.590000000,
        "volume_traded": 1334.947529713,
        "trades_count": 13875
    },
    {
        "time_period_start": "2020-08-13T06:00:00.0000000Z",
        "time_period_end": "2020-08-13T09:00:00.0000000Z",
        "time_open": "2020-08-13T06:00:02.5322360Z",
        "time_close": "2020-08-13T08:59:59.9675020Z",
        "price_open": 11536.590000000,
        "price_high": 11576.560000000,
        "price_low": 11373.600000000,
        "price_close": 11422.820000000,
        "volume_traded": 2534.252483986,
        "trades_count": 17488
    },
    {
        "time_period_start": "2020-08-13T09:00:00.0000000Z",
        "time_period_end": "2020-08-13T12:00:00.0000000Z",
        "time_open": "2020-08-13T09:00:00.1700000Z",
        "time_close": "2020-08-13T11:59:58.7990000Z",
        "price_open": 11420.100000000,
        "price_high": 11630.000000000,
        "price_low": 11269.000000000,
        "price_close": 11559.500000000,
        "volume_traded": 4993.920640841,
        "trades_count": 22443
    },
    {
        "time_period_start": "2020-08-13T12:00:00.0000000Z",
        "time_period_end": "2020-08-13T15:00:00.0000000Z",
        "time_open": "2020-08-13T12:00:01.7840000Z",
        "time_close": "2020-08-13T14:59:59.2353900Z",
        "price_open": 11550.600000000,
        "price_high": 11595.000000000,
        "price_low": 11386.320000000,
        "price_close": 11531.760000000,
        "volume_traded": 4195.863618669,
        "trades_count": 24762
    },
    {
        "time_period_start": "2020-08-13T15:00:00.0000000Z",
        "time_period_end": "2020-08-13T18:00:00.0000000Z",
        "time_open": "2020-08-13T15:00:04.0850000Z",
        "time_close": "2020-08-13T17:59:59.1987340Z",
        "price_open": 11532.950000000,
        "price_high": 11546.880000000,
        "price_low": 11451.080000000,
        "price_close": 11529.540000000,
        "volume_traded": 2842.488244145,
        "trades_count": 25979
    },
    {
        "time_period_start": "2020-08-13T18:00:00.0000000Z",
        "time_period_end": "2020-08-13T21:00:00.0000000Z",
        "time_open": "2020-08-13T18:00:00.2040120Z",
        "time_close": "2020-08-13T20:59:59.4650000Z",
        "price_open": 11529.530000000,
        "price_high": 11654.810000000,
        "price_low": 11480.010000000,
        "price_close": 11622.760000000,
        "volume_traded": 3506.432466723,
        "trades_count": 28042
    },
    {
        "time_period_start": "2020-08-13T21:00:00.0000000Z",
        "time_period_end": "2020-08-14T00:00:00.0000000Z",
        "time_open": "2020-08-13T21:00:00.2620000Z",
        "time_close": "2020-08-13T23:59:59.7009800Z",
        "price_open": 11622.760000000,
        "price_high": 11806.610000000,
        "price_low": 11565.160000000,
        "price_close": 11795.950000000,
        "volume_traded": 6380.225036116,
        "trades_count": 36516
    },
    {
        "time_period_start": "2020-08-14T00:00:00.0000000Z",
        "time_period_end": "2020-08-14T03:00:00.0000000Z",
        "time_open": "2020-08-14T00:00:00.0463300Z",
        "time_close": "2020-08-14T02:59:59.5181500Z",
        "price_open": 11795.950000000,
        "price_high": 11852.090000000,
        "price_low": 11733.600000000,
        "price_close": 11747.200000000,
        "volume_traded": 3265.176620780,
        "trades_count": 23912
    },
    {
        "time_period_start": "2020-08-14T03:00:00.0000000Z",
        "time_period_end": "2020-08-14T06:00:00.0000000Z",
        "time_open": "2020-08-14T03:00:00.5688420Z",
        "time_close": "2020-08-14T05:59:59.8467670Z",
        "price_open": 11746.420000000,
        "price_high": 11780.150000000,
        "price_low": 11683.300000000,
        "price_close": 11740.950000000,
        "volume_traded": 1850.303068267,
        "trades_count": 17333
    },
    {
        "time_period_start": "2020-08-14T06:00:00.0000000Z",
        "time_period_end": "2020-08-14T09:00:00.0000000Z",
        "time_open": "2020-08-14T06:00:01.1343740Z",
        "time_close": "2020-08-14T08:59:58.0030000Z",
        "price_open": 11740.950000000,
        "price_high": 11761.490000000,
        "price_low": 11658.500000000,
        "price_close": 11699.600000000,
        "volume_traded": 3346.261346667,
        "trades_count": 16949
    },
    {
        "time_period_start": "2020-08-14T09:00:00.0000000Z",
        "time_period_end": "2020-08-14T12:00:00.0000000Z",
        "time_open": "2020-08-14T09:00:00.3525250Z",
        "time_close": "2020-08-14T11:59:59.9507030Z",
        "price_open": 11698.290000000,
        "price_high": 11799.120000000,
        "price_low": 11674.150000000,
        "price_close": 11774.750000000,
        "volume_traded": 2362.067277388,
        "trades_count": 14269
    },
    {
        "time_period_start": "2020-08-14T12:00:00.0000000Z",
        "time_period_end": "2020-08-14T15:00:00.0000000Z",
        "time_open": "2020-08-14T12:00:01.5672960Z",
        "time_close": "2020-08-14T14:59:59.6990000Z",
        "price_open": 11774.750000000,
        "price_high": 11780.100000000,
        "price_low": 11651.240000000,
        "price_close": 11723.790000000,
        "volume_traded": 3343.622853027,
        "trades_count": 21086
    },
    {
        "time_period_start": "2020-08-14T15:00:00.0000000Z",
        "time_period_end": "2020-08-14T18:00:00.0000000Z",
        "time_open": "2020-08-14T15:00:02.1085140Z",
        "time_close": "2020-08-14T17:59:58.8318400Z",
        "price_open": 11716.430000000,
        "price_high": 11867.100000000,
        "price_low": 11657.290000000,
        "price_close": 11801.680000000,
        "volume_traded": 5062.344827141,
        "trades_count": 29755
    },
    {
        "time_period_start": "2020-08-14T18:00:00.0000000Z",
        "time_period_end": "2020-08-14T21:00:00.0000000Z",
        "time_open": "2020-08-14T18:00:00.0900000Z",
        "time_close": "2020-08-14T20:59:59.9028220Z",
        "price_open": 11812.200000000,
        "price_high": 11849.800000000,
        "price_low": 11751.540000000,
        "price_close": 11774.770000000,
        "volume_traded": 3020.371188153,
        "trades_count": 22445
    },
    {
        "time_period_start": "2020-08-14T21:00:00.0000000Z",
        "time_period_end": "2020-08-15T00:00:00.0000000Z",
        "time_open": "2020-08-14T21:00:00.1271560Z",
        "time_close": "2020-08-14T23:59:58.1017590Z",
        "price_open": 11774.770000000,
        "price_high": 11806.230000000,
        "price_low": 11711.200000000,
        "price_close": 11779.000000000,
        "volume_traded": 2230.804912476,
        "trades_count": 21849
    },
    {
        "time_period_start": "2020-08-15T00:00:00.0000000Z",
        "time_period_end": "2020-08-15T03:00:00.0000000Z",
        "time_open": "2020-08-15T00:00:00.7509260Z",
        "time_close": "2020-08-15T02:59:59.9496560Z",
        "price_open": 11777.500000000,
        "price_high": 11989.980000000,
        "price_low": 11771.970000000,
        "price_close": 11903.270000000,
        "volume_traded": 3782.400242863,
        "trades_count": 26543
    },
    {
        "time_period_start": "2020-08-15T03:00:00.0000000Z",
        "time_period_end": "2020-08-15T06:00:00.0000000Z",
        "time_open": "2020-08-15T03:00:03.6709890Z",
        "time_close": "2020-08-15T05:59:57.3535910Z",
        "price_open": 11903.190000000,
        "price_high": 11925.060000000,
        "price_low": 11828.060000000,
        "price_close": 11898.000000000,
        "volume_traded": 2104.392575646,
        "trades_count": 17890
    },
    {
        "time_period_start": "2020-08-15T06:00:00.0000000Z",
        "time_period_end": "2020-08-15T09:00:00.0000000Z",
        "time_open": "2020-08-15T06:00:00.9623490Z",
        "time_close": "2020-08-15T08:59:59.5570000Z",
        "price_open": 11897.990000000,
        "price_high": 11953.360000000,
        "price_low": 11833.080000000,
        "price_close": 11871.580000000,
        "volume_traded": 1705.391978526,
        "trades_count": 17974
    },
    {
        "time_period_start": "2020-08-15T09:00:00.0000000Z",
        "time_period_end": "2020-08-15T12:00:00.0000000Z",
        "time_open": "2020-08-15T09:00:00.3698790Z",
        "time_close": "2020-08-15T11:59:59.7041090Z",
        "price_open": 11878.420000000,
        "price_high": 11933.190000000,
        "price_low": 11842.260000000,
        "price_close": 11852.260000000,
        "volume_traded": 1941.296375346,
        "trades_count": 12584
    },
    {
        "time_period_start": "2020-08-15T12:00:00.0000000Z",
        "time_period_end": "2020-08-15T15:00:00.0000000Z",
        "time_open": "2020-08-15T12:00:01.0530000Z",
        "time_close": "2020-08-15T14:59:57.3014120Z",
        "price_open": 11854.600000000,
        "price_high": 11876.040000000,
        "price_low": 11667.700000000,
        "price_close": 11815.000000000,
        "volume_traded": 2947.922057263,
        "trades_count": 22617
    },
    {
        "time_period_start": "2020-08-15T15:00:00.0000000Z",
        "time_period_end": "2020-08-15T18:00:00.0000000Z",
        "time_open": "2020-08-15T15:00:02.2269750Z",
        "time_close": "2020-08-15T17:59:59.4594590Z",
        "price_open": 11815.010000000,
        "price_high": 11916.420000000,
        "price_low": 11789.600000000,
        "price_close": 11864.660000000,
        "volume_traded": 2172.108305232,
        "trades_count": 21141
    },
    {
        "time_period_start": "2020-08-15T18:00:00.0000000Z",
        "time_period_end": "2020-08-15T21:00:00.0000000Z",
        "time_open": "2020-08-15T18:00:00.4514340Z",
        "time_close": "2020-08-15T20:59:55.3110820Z",
        "price_open": 11864.660000000,
        "price_high": 11903.080000000,
        "price_low": 11833.070000000,
        "price_close": 11870.090000000,
        "volume_traded": 1584.415784544,
        "trades_count": 20265
    },
    {
        "time_period_start": "2020-08-15T21:00:00.0000000Z",
        "time_period_end": "2020-08-16T00:00:00.0000000Z",
        "time_open": "2020-08-15T21:00:00.5040740Z",
        "time_close": "2020-08-15T23:59:56.9225970Z",
        "price_open": 11870.080000000,
        "price_high": 11988.000000000,
        "price_low": 11750.000000000,
        "price_close": 11859.240000000,
        "volume_traded": 4448.649128199,
        "trades_count": 27727
    },
    {
        "time_period_start": "2020-08-16T00:00:00.0000000Z",
        "time_period_end": "2020-08-16T03:00:00.0000000Z",
        "time_open": "2020-08-16T00:00:03.8752530Z",
        "time_close": "2020-08-16T02:59:58.7000000Z",
        "price_open": 11860.020000000,
        "price_high": 11900.000000000,
        "price_low": 11780.000000000,
        "price_close": 11878.970000000,
        "volume_traded": 1546.897519075,
        "trades_count": 16695
    },
    {
        "time_period_start": "2020-08-16T03:00:00.0000000Z",
        "time_period_end": "2020-08-16T06:00:00.0000000Z",
        "time_open": "2020-08-16T03:00:00.1650030Z",
        "time_close": "2020-08-16T05:59:54.7571590Z",
        "price_open": 11877.500000000,
        "price_high": 11942.870000000,
        "price_low": 11870.460000000,
        "price_close": 11902.830000000,
        "volume_traded": 1425.572669341,
        "trades_count": 14601
    },
    {
        "time_period_start": "2020-08-16T06:00:00.0000000Z",
        "time_period_end": "2020-08-16T09:00:00.0000000Z",
        "time_open": "2020-08-16T06:00:01.8449370Z",
        "time_close": "2020-08-16T08:59:57.3542340Z",
        "price_open": 11902.940000000,
        "price_high": 11927.920000000,
        "price_low": 11815.800000000,
        "price_close": 11847.910000000,
        "volume_traded": 1059.733135534,
        "trades_count": 11092
    },
    {
        "time_period_start": "2020-08-16T09:00:00.0000000Z",
        "time_period_end": "2020-08-16T12:00:00.0000000Z",
        "time_open": "2020-08-16T09:00:00.3694890Z",
        "time_close": "2020-08-16T11:59:59.8530000Z",
        "price_open": 11847.740000000,
        "price_high": 11890.270000000,
        "price_low": 11717.780000000,
        "price_close": 11752.560000000,
        "volume_traded": 2791.253259969,
        "trades_count": 17835
    },
    {
        "time_period_start": "2020-08-16T12:00:00.0000000Z",
        "time_period_end": "2020-08-16T15:00:00.0000000Z",
        "time_open": "2020-08-16T12:00:00.1054470Z",
        "time_close": "2020-08-16T14:59:59.5780000Z",
        "price_open": 11753.410000000,
        "price_high": 11846.500000000,
        "price_low": 11685.970000000,
        "price_close": 11813.300000000,
        "volume_traded": 2388.238590369,
        "trades_count": 21696
    },
    {
        "time_period_start": "2020-08-16T15:00:00.0000000Z",
        "time_period_end": "2020-08-16T18:00:00.0000000Z",
        "time_open": "2020-08-16T15:00:00.8542240Z",
        "time_close": "2020-08-16T17:59:59.5807080Z",
        "price_open": 11811.960000000,
        "price_high": 11903.240000000,
        "price_low": 11793.770000000,
        "price_close": 11837.920000000,
        "volume_traded": 1775.307895890,
        "trades_count": 20118
    },
    {
        "time_period_start": "2020-08-16T18:00:00.0000000Z",
        "time_period_end": "2020-08-16T21:00:00.0000000Z",
        "time_open": "2020-08-16T18:00:00.4056980Z",
        "time_close": "2020-08-16T20:59:59.9402470Z",
        "price_open": 11837.930000000,
        "price_high": 11870.410000000,
        "price_low": 11795.580000000,
        "price_close": 11849.920000000,
        "volume_traded": 1480.496876536,
        "trades_count": 19341
    },
    {
        "time_period_start": "2020-08-16T21:00:00.0000000Z",
        "time_period_end": "2020-08-17T00:00:00.0000000Z",
        "time_open": "2020-08-16T21:00:00.1550860Z",
        "time_close": "2020-08-16T23:59:59.1938080Z",
        "price_open": 11849.920000000,
        "price_high": 11926.180000000,
        "price_low": 11834.120000000,
        "price_close": 11918.840000000,
        "volume_traded": 1673.246023192,
        "trades_count": 18718
    }
];

const Dataset = function (label, info) {
    this.label = label;
    this.data = info;
    this.type = 'line';
};
const ctx = document.getElementById('myChart').getContext('2d');

let times = [];
let prices = [];

exResponse.forEach( function (snapshot) {
    times.push(snapshot.time_period_end);
    prices.push(snapshot.price_close);
})

let chart = new Chart(ctx, {
    type:'line',
    data: {
        labels: times,
        datasets: [{
            label: 'BTC',
            borderColor: '0e3040',
            data: prices,
        }],
    },
    options: {}

});

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     let times = [];
//     let prices = [];
//
//     response.forEach(snapshot => {
//         times.push(moment(snapshot.time_period_end).format("LLL"));
//         prices.push(snapshot.price_close);
//
//
//     });
//     removeData(chart);
//     addData(chart, times, prices);
// })
//
// console.log(chart)

// const queryURL = `https://rest.coinapi.io/v1/ohlcv/${coin_name}/USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
// const queryURL1 = `https://rest.coinapi.io/v1/symbols?filter_symbol_id=BTC&apikey=${apiKey}`


$(document).ready();



// $('#submit').on('click', function (e) {
//     e.preventDefault();
//
//     // coin_name init
//
//     if (!$(this).siblings('input').val()) {
//         coin_name = "BTC";
//         console.log(coin_name);
//     } else {
//
//         coin_name = $(this).siblings('#coin-name').val().toUpperCase();
//
//         console.log(coin_name);
//     }
//
//
//     // interval init
//
//     if ($(this).siblings('select').val() === 'year') {
//         period_id = "7DAY";
//         time_start = moment().subtract(1, 'years').format();
//     } else if ($(this).siblings('select').val() === 'quarter') {
//         period_id = "1DAY";
//         time_start = moment().subtract(3, 'months').format();
//     } else if ($(this).siblings('select').val() === 'month') {
//         period_id = "12HRS";
//         time_start = moment().subtract(1, 'months').format();
//     } else if ($(this).siblings('select').val() === 'week') {
//         period_id = "3HRS";
//         time_start = moment().subtract(1, 'weeks').format();
//     } else if ($(this).siblings('select').val() === 'today') {
//         period_id = "15MIN";
//         time_start = moment().subtract(1, 'days').format();
//     }
//
//     // render
//
//     renderGraph(coin_name, period_id, time_end, time_start);
//
// });

// function renderGraph(coin_name = "BTC", period_id = "1DAY", time_end = moment().format(), time_start = moment().subtract(1, 'months').format()) {
//
//     let queryURL = buildQuery(coin_name, period_id, time_end, time_start);
//
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//
//         let times = [];
//         let prices = [];
//
//         response.forEach(snapshot => {
//             times.push(moment(snapshot.time_period_end).format("LLL"));
//             prices.push(snapshot.price_close);
//
//
//         });
//         console.log(chart.data);
//         removeData(chart);
//
//         addData(chart, times, prices);
//
//
//         console.log(prices);
//
//
//
//         // instead of this, do the addData function and generate new data in the render function
//
//
//     });
// }

function addData(chart, label, data) {
    chart.data.labels = label
    chart.data.datasets.push({
        label: "BTC",
        data: data
    })
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}


function buildQuery(coin_name, period_id, time_end, time_start) {
    return `https://rest.coinapi.io/v1/ohlcv/${coin_name}/USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
}