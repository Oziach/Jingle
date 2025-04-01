export type LinkData = {
  start: { x: number; y: number; z:number; name: string; mapId: number};
  end: { x: number; y: number; z:number; name: string; mapId: number };
};

export type GroupedLinks = {
  [key: string]: LinkData[];
};

export const groupedLinks : GroupedLinks = {
  "Kebos Underground": [
    {
      "start": {
        "x": 1178,
        "y": 10064,
        "z": 0,
        "mapId": 33,
        "name": "Kebos Underground"
      },
      "end": {
        "x": 1232,
        "y": 3729,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1292,
        "y": 10009,
        "z": 0,
        "mapId": 33,
        "name": "Kebos Underground"
      },
      "end": {
        "x": 1292,
        "y": 3657,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1293,
        "y": 10029,
        "z": 0,
        "mapId": 33,
        "name": "Kebos Underground"
      },
      "end": {
        "x": 1292,
        "y": 3676,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1305,
        "y": 9958,
        "z": 0,
        "mapId": 33,
        "name": "Kebos Underground"
      },
      "end": {
        "x": 1307,
        "y": 3574,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1312,
        "y": 10038,
        "z": 0,
        "mapId": 33,
        "name": "Kebos Underground"
      },
      "end": {
        "x": 1312,
        "y": 3686,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1312,
        "y": 10188,
        "z": 0,
        "mapId": 33,
        "name": "Kebos Underground"
      },
      "end": {
        "x": 1309,
        "y": 3807,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1314,
        "y": 10015,
        "z": 0,
        "mapId": 33,
        "name": "Kebos Underground"
      },
      "end": {
        "x": 1314,
        "y": 3663,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1330,
        "y": 10021,
        "z": 0,
        "mapId": 33,
        "name": "Kebos Underground"
      },
      "end": {
        "x": 1330,
        "y": 3669,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Gielinor Surface": [
    {
      "start": {
        "x": 1232,
        "y": 3729,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1242,
        "y": 10081,
        "z": 0,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 1292,
        "y": 3657,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1292,
        "y": 10057,
        "z": 1,
        "mapId": 33,
        "name": "Kebos Underground"
      }
    },
    {
      "start": {
        "x": 1307,
        "y": 3574,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1305,
        "y": 9974,
        "z": 0,
        "mapId": 33,
        "name": "Kebos Underground"
      }
    },
    {
      "start": {
        "x": 1309,
        "y": 3807,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1312,
        "y": 10214,
        "z": 0,
        "mapId": 33,
        "name": "Kebos Underground"
      }
    },
    {
      "start": {
        "x": 1312,
        "y": 3686,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1312,
        "y": 10086,
        "z": 1,
        "mapId": 33,
        "name": "Kebos Underground"
      }
    },
    {
      "start": {
        "x": 1314,
        "y": 3663,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1314,
        "y": 10063,
        "z": 1,
        "mapId": 33,
        "name": "Kebos Underground"
      }
    },
    {
      "start": {
        "x": 1330,
        "y": 3669,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1330,
        "y": 10069,
        "z": 1,
        "mapId": 33,
        "name": "Kebos Underground"
      }
    },
    {
      "start": {
        "x": 1357,
        "y": 2920,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1358,
        "y": 9320,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      }
    },
    {
      "start": {
        "x": 1389,
        "y": 2916,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1389,
        "y": 9316,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      }
    },
    {
      "start": {
        "x": 1420,
        "y": 3588,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1432,
        "y": 9913,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      }
    },
    {
      "start": {
        "x": 1433,
        "y": 3670,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1435,
        "y": 10078,
        "z": 3,
        "mapId": 32,
        "name": "Kourend Underground"
      }
    },
    {
      "start": {
        "x": 1436,
        "y": 3131,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1440,
        "y": 9508,
        "z": 1,
        "mapId": 44,
        "name": "Cam Torum"
      }
    },
    {
      "start": {
        "x": 1448,
        "y": 2938,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1448,
        "y": 9338,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      }
    },
    {
      "start": {
        "x": 1470,
        "y": 3653,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1650,
        "y": 9986,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      }
    },
    {
      "start": {
        "x": 1476,
        "y": 2927,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1470,
        "y": 9327,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      }
    },
    {
      "start": {
        "x": 1483,
        "y": 3549,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1483,
        "y": 9950,
        "z": 3,
        "mapId": 32,
        "name": "Kourend Underground"
      }
    },
    {
      "start": {
        "x": 1497,
        "y": 3132,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1488,
        "y": 9502,
        "z": 1,
        "mapId": 43,
        "name": "Varlamore Underground"
      }
    },
    {
      "start": {
        "x": 1558,
        "y": 3049,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1558,
        "y": 9449,
        "z": 1,
        "mapId": 43,
        "name": "Varlamore Underground"
      }
    },
    {
      "start": {
        "x": 1563,
        "y": 3791,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1617,
        "y": 10102,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      }
    },
    {
      "start": {
        "x": 1604,
        "y": 3508,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1597,
        "y": 9900,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      }
    },
    {
      "start": {
        "x": 1614,
        "y": 3174,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1615,
        "y": 9574,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      }
    },
    {
      "start": {
        "x": 1623,
        "y": 3165,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1623,
        "y": 9563,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      }
    },
    {
      "start": {
        "x": 1637,
        "y": 3673,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1666,
        "y": 10051,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      }
    },
    {
      "start": {
        "x": 1641,
        "y": 3166,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1641,
        "y": 9564,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      }
    },
    {
      "start": {
        "x": 1644,
        "y": 3449,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1646,
        "y": 9849,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      }
    },
    {
      "start": {
        "x": 1670,
        "y": 3567,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1800,
        "y": 9968,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      }
    },
    {
      "start": {
        "x": 1693,
        "y": 3084,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1692,
        "y": 9480,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      }
    },
    {
      "start": {
        "x": 1693,
        "y": 3089,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1692,
        "y": 9492,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      }
    },
    {
      "start": {
        "x": 1696,
        "y": 3865,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1719,
        "y": 10102,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      }
    },
    {
      "start": {
        "x": 1702,
        "y": 3574,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1830,
        "y": 9973,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      }
    },
    {
      "start": {
        "x": 1795,
        "y": 3107,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1797,
        "y": 9506,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      }
    },
    {
      "start": {
        "x": 1813,
        "y": 3745,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1813,
        "y": 10145,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      }
    },
    {
      "start": {
        "x": 2131,
        "y": 2994,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1941,
        "y": 9451,
        "z": 0,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 2142,
        "y": 3944,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2330,
        "y": 10352,
        "z": 2,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 2183,
        "y": 3327,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3207,
        "y": 6079,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      }
    },
    {
      "start": {
        "x": 2239,
        "y": 3270,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3263,
        "y": 6022,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      }
    },
    {
      "start": {
        "x": 2239,
        "y": 3384,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3263,
        "y": 6136,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      }
    },
    {
      "start": {
        "x": 2278,
        "y": 3611,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2275,
        "y": 9987,
        "z": 0,
        "mapId": 19,
        "name": "Stronghold Underground"
      }
    },
    {
      "start": {
        "x": 2297,
        "y": 3327,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3321,
        "y": 6079,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      }
    },
    {
      "start": {
        "x": 2309,
        "y": 2919,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2169,
        "y": 9308,
        "z": 0,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 2401,
        "y": 3889,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2394,
        "y": 10297,
        "z": 1,
        "mapId": 11,
        "name": "Miscellania Underground"
      }
    },
    {
      "start": {
        "x": 2403,
        "y": 3419,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2409,
        "y": 9811,
        "z": 0,
        "mapId": 19,
        "name": "Stronghold Underground"
      }
    },
    {
      "start": {
        "x": 2412,
        "y": 3061,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2404,
        "y": 9414,
        "z": 0,
        "mapId": 27,
        "name": "Yanille Underground"
      }
    },
    {
      "start": {
        "x": 2428,
        "y": 3424,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2429,
        "y": 9824,
        "z": 0,
        "mapId": 19,
        "name": "Stronghold Underground"
      }
    },
    {
      "start": {
        "x": 2445,
        "y": 2819,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1939,
        "y": 8966,
        "z": 1,
        "mapId": 31,
        "name": "Feldip Hills Underground"
      }
    },
    {
      "start": {
        "x": 2452,
        "y": 3231,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3015,
        "y": 5630,
        "z": 0,
        "mapId": 16,
        "name": "Ourania Altar"
      }
    },
    {
      "start": {
        "x": 2457,
        "y": 2847,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1937,
        "y": 9009,
        "z": 1,
        "mapId": 31,
        "name": "Feldip Hills Underground"
      }
    },
    {
      "start": {
        "x": 2463,
        "y": 3496,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2463,
        "y": 9897,
        "z": 0,
        "mapId": 19,
        "name": "Stronghold Underground"
      }
    },
    {
      "start": {
        "x": 2465,
        "y": 4012,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2461,
        "y": 10418,
        "z": 0,
        "mapId": 11,
        "name": "Miscellania Underground"
      }
    },
    {
      "start": {
        "x": 2483,
        "y": 2891,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1971,
        "y": 9033,
        "z": 1,
        "mapId": 31,
        "name": "Feldip Hills Underground"
      }
    },
    {
      "start": {
        "x": 2509,
        "y": 3846,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2509,
        "y": 10246,
        "z": 0,
        "mapId": 11,
        "name": "Miscellania Underground"
      }
    },
    {
      "start": {
        "x": 2512,
        "y": 3508,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1764,
        "y": 5367,
        "z": 1,
        "mapId": 1,
        "name": "Ancient Cavern"
      }
    },
    {
      "start": {
        "x": 2521,
        "y": 3740,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2439,
        "y": 10146,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      }
    },
    {
      "start": {
        "x": 2523,
        "y": 2861,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2012,
        "y": 9005,
        "z": 1,
        "mapId": 31,
        "name": "Feldip Hills Underground"
      }
    },
    {
      "start": {
        "x": 2526,
        "y": 2894,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2534,
        "y": 9294,
        "z": 0,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 2543,
        "y": 3741,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2544,
        "y": 10144,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      }
    },
    {
      "start": {
        "x": 2561,
        "y": 3320,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2661,
        "y": 9641,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      }
    },
    {
      "start": {
        "x": 2562,
        "y": 3356,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2562,
        "y": 9756,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      }
    },
    {
      "start": {
        "x": 2569,
        "y": 3122,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2569,
        "y": 9522,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      }
    },
    {
      "start": {
        "x": 2569,
        "y": 3229,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2569,
        "y": 9629,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      }
    },
    {
      "start": {
        "x": 2587,
        "y": 3235,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2571,
        "y": 9685,
        "z": 0,
        "mapId": 2,
        "name": "Ardougne Underground"
      }
    },
    {
      "start": {
        "x": 2594,
        "y": 3085,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2594,
        "y": 9486,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      }
    },
    {
      "start": {
        "x": 2604,
        "y": 3078,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2603,
        "y": 9479,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      }
    },
    {
      "start": {
        "x": 2620,
        "y": 3865,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2618,
        "y": 10265,
        "z": 0,
        "mapId": 11,
        "name": "Miscellania Underground"
      }
    },
    {
      "start": {
        "x": 2623,
        "y": 3393,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2621,
        "y": 9795,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      }
    },
    {
      "start": {
        "x": 2632,
        "y": 3294,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2632,
        "y": 9694,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      }
    },
    {
      "start": {
        "x": 2696,
        "y": 3283,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2696,
        "y": 9682,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      }
    },
    {
      "start": {
        "x": 2724,
        "y": 3375,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2724,
        "y": 9775,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      }
    },
    {
      "start": {
        "x": 2731,
        "y": 3713,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2772,
        "y": 10162,
        "z": 0,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 2744,
        "y": 3154,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2714,
        "y": 9564,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      }
    },
    {
      "start": {
        "x": 2760,
        "y": 3062,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2734,
        "y": 9477,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      }
    },
    {
      "start": {
        "x": 2796,
        "y": 3718,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2799,
        "y": 10136,
        "z": 0,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 2797,
        "y": 3615,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2809,
        "y": 10002,
        "z": 0,
        "mapId": 17,
        "name": "Fremennik Slayer Cave"
      }
    },
    {
      "start": {
        "x": 2809,
        "y": 3194,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2805,
        "y": 9590,
        "z": 3,
        "mapId": 9,
        "name": "Karamja Underground"
      }
    },
    {
      "start": {
        "x": 2820,
        "y": 3374,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2822,
        "y": 9774,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 2820,
        "y": 3484,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2820,
        "y": 9884,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 2823,
        "y": 3510,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2823,
        "y": 9910,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 2825,
        "y": 3118,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2829,
        "y": 9522,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      }
    },
    {
      "start": {
        "x": 2827,
        "y": 3647,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2824,
        "y": 10050,
        "z": 0,
        "mapId": 22,
        "name": "Troll Stronghold"
      }
    },
    {
      "start": {
        "x": 2831,
        "y": 3677,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2831,
        "y": 10077,
        "z": 2,
        "mapId": 22,
        "name": "Troll Stronghold"
      }
    },
    {
      "start": {
        "x": 2833,
        "y": 3542,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2906,
        "y": 9968,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 2834,
        "y": 3256,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2833,
        "y": 9657,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 2839,
        "y": 3690,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2837,
        "y": 10089,
        "z": 2,
        "mapId": 10,
        "name": "Keldagrim"
      }
    },
    {
      "start": {
        "x": 2842,
        "y": 3424,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2842,
        "y": 9824,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 2847,
        "y": 3516,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2847,
        "y": 9916,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 2856,
        "y": 3168,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2856,
        "y": 9569,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      }
    },
    {
      "start": {
        "x": 2857,
        "y": 3519,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2857,
        "y": 9919,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 2867,
        "y": 3941,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2845,
        "y": 10353,
        "z": 0,
        "mapId": 11,
        "name": "Miscellania Underground"
      }
    },
    {
      "start": {
        "x": 2877,
        "y": 3480,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2877,
        "y": 9880,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 2884,
        "y": 3397,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2884,
        "y": 9797,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 2892,
        "y": 3507,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2892,
        "y": 9907,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 2918,
        "y": 3746,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2881,
        "y": 5311,
        "z": 2,
        "mapId": 7,
        "name": "God Wars Dungeon"
      }
    },
    {
      "start": {
        "x": 2924,
        "y": 3250,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2924,
        "y": 9650,
        "z": 0,
        "mapId": 3,
        "name": "Asgarnia Ice Cave"
      }
    },
    {
      "start": {
        "x": 2965,
        "y": 3331,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2958,
        "y": 9737,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 2986,
        "y": 3387,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1752,
        "y": 5238,
        "z": 0,
        "mapId": 13,
        "name": "Mole Hole"
      }
    },
    {
      "start": {
        "x": 2998,
        "y": 3376,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1752,
        "y": 5238,
        "z": 0,
        "mapId": 13,
        "name": "Mole Hole"
      }
    },
    {
      "start": {
        "x": 2999,
        "y": 3493,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2952,
        "y": 5766,
        "z": 0,
        "mapId": 39,
        "name": "Ruins of Camdozaal"
      }
    },
    {
      "start": {
        "x": 3005,
        "y": 3963,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3005,
        "y": 10363,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3007,
        "y": 3150,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3007,
        "y": 9550,
        "z": 0,
        "mapId": 3,
        "name": "Asgarnia Ice Cave"
      }
    },
    {
      "start": {
        "x": 3017,
        "y": 3739,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3066,
        "y": 10159,
        "z": 3,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3017,
        "y": 3849,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3069,
        "y": 10256,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3018,
        "y": 3232,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2962,
        "y": 9651,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      }
    },
    {
      "start": {
        "x": 3018,
        "y": 3450,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3019,
        "y": 9850,
        "z": 0,
        "mapId": 6,
        "name": "Dwarven Mines"
      }
    },
    {
      "start": {
        "x": 3019,
        "y": 3339,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3019,
        "y": 9739,
        "z": 0,
        "mapId": 6,
        "name": "Dwarven Mines"
      }
    },
    {
      "start": {
        "x": 3045,
        "y": 3924,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3045,
        "y": 10329,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3059,
        "y": 3377,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3059,
        "y": 9778,
        "z": 0,
        "mapId": 6,
        "name": "Dwarven Mines"
      }
    },
    {
      "start": {
        "x": 3068,
        "y": 3741,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3188,
        "y": 10127,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3069,
        "y": 3856,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3017,
        "y": 10249,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3075,
        "y": 3655,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3196,
        "y": 10056,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3081,
        "y": 3420,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 1859,
        "y": 5243,
        "z": 0,
        "mapId": 18,
        "name": "Stronghold of Security"
      }
    },
    {
      "start": {
        "x": 3084,
        "y": 3272,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3084,
        "y": 9672,
        "z": 0,
        "mapId": 6,
        "name": "Dwarven Mines"
      }
    },
    {
      "start": {
        "x": 3088,
        "y": 3571,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3088,
        "y": 9971,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3090,
        "y": 3956,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2539,
        "y": 4712,
        "z": 0,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 3092,
        "y": 3362,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3117,
        "y": 9754,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3097,
        "y": 3469,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3097,
        "y": 9867,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3104,
        "y": 3162,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3103,
        "y": 9576,
        "z": 0,
        "mapId": 3,
        "name": "Asgarnia Ice Cave"
      }
    },
    {
      "start": {
        "x": 3115,
        "y": 3357,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3081,
        "y": 9774,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3116,
        "y": 3452,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3116,
        "y": 9852,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3118,
        "y": 3244,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3118,
        "y": 9642,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3125,
        "y": 3832,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3241,
        "y": 10234,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3150,
        "y": 3347,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3158,
        "y": 9714,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3165,
        "y": 3252,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3149,
        "y": 9653,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3169,
        "y": 3172,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3169,
        "y": 9572,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3189,
        "y": 3355,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3190,
        "y": 9758,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3203,
        "y": 3169,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2452,
        "y": 4473,
        "z": 0,
        "mapId": 28,
        "name": "Zanaris"
      }
    },
    {
      "start": {
        "x": 3203,
        "y": 3681,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2963,
        "y": 4382,
        "z": 2,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 3209,
        "y": 3218,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3209,
        "y": 9616,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3222,
        "y": 3788,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3295,
        "y": 10202,
        "z": 1,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3227,
        "y": 3108,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3483,
        "y": 9510,
        "z": 2,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 3230,
        "y": 3504,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3230,
        "y": 9904,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3231,
        "y": 3952,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3232,
        "y": 10352,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3232,
        "y": 3936,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3233,
        "y": 10331,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3237,
        "y": 3458,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3237,
        "y": 9858,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3244,
        "y": 3383,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3244,
        "y": 9783,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    },
    {
      "start": {
        "x": 3244,
        "y": 3949,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3243,
        "y": 10352,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3260,
        "y": 3666,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3384,
        "y": 10050,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3261,
        "y": 3833,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3336,
        "y": 10286,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3283,
        "y": 3775,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3359,
        "y": 10244,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3285,
        "y": 3808,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3360,
        "y": 10273,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3293,
        "y": 3746,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3405,
        "y": 10146,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3293,
        "y": 3850,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3359,
        "y": 10328,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3309,
        "y": 3450,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3105,
        "y": 5279,
        "z": 0,
        "mapId": 21,
        "name": "Tolna's Rift"
      }
    },
    {
      "start": {
        "x": 3320,
        "y": 3122,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3305,
        "y": 9497,
        "z": 0,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 3321,
        "y": 3795,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3423,
        "y": 10204,
        "z": 2,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3321,
        "y": 3831,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3383,
        "y": 10288,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3358,
        "y": 2711,
        "z": 1,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3359,
        "y": 9129,
        "z": 0,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 3361,
        "y": 3150,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3366,
        "y": 11482,
        "z": 0,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 3405,
        "y": 3506,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3405,
        "y": 9907,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      }
    },
    {
      "start": {
        "x": 3417,
        "y": 3535,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3412,
        "y": 9930,
        "z": 3,
        "mapId": 14,
        "name": "Morytania Underground"
      }
    },
    {
      "start": {
        "x": 3422,
        "y": 3484,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3440,
        "y": 9886,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      }
    },
    {
      "start": {
        "x": 3485,
        "y": 3321,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3493,
        "y": 9726,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      }
    },
    {
      "start": {
        "x": 3489,
        "y": 3231,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3490,
        "y": 9632,
        "z": 0,
        "mapId": 42,
        "name": "Kharidian Desert Underground"
      }
    },
    {
      "start": {
        "x": 3495,
        "y": 3464,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3477,
        "y": 9846,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      }
    },
    {
      "start": {
        "x": 3543,
        "y": 3461,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3549,
        "y": 9864,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      }
    },
    {
      "start": {
        "x": 3652,
        "y": 3519,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3668,
        "y": 9888,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      }
    },
    {
      "start": {
        "x": 3657,
        "y": 3409,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3679,
        "y": 9796,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      }
    },
    {
      "start": {
        "x": 3678,
        "y": 3854,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3596,
        "y": 10292,
        "z": 1,
        "mapId": 30,
        "name": "Fossil Island Underground"
      }
    },
    {
      "start": {
        "x": 3680,
        "y": 3498,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3682,
        "y": 9962,
        "z": 0,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 3681,
        "y": 3537,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 2163,
        "y": 5115,
        "z": 0,
        "mapId": 4,
        "name": "Braindeath Island"
      }
    },
    {
      "start": {
        "x": 3719,
        "y": 3307,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3732,
        "y": 9683,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      }
    },
    {
      "start": {
        "x": 3725,
        "y": 3356,
        "z": 1,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3726,
        "y": 9756,
        "z": 1,
        "mapId": 14,
        "name": "Morytania Underground"
      }
    },
    {
      "start": {
        "x": 3728,
        "y": 3300,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3738,
        "y": 9702,
        "z": 1,
        "mapId": 14,
        "name": "Morytania Underground"
      }
    },
    {
      "start": {
        "x": 3746,
        "y": 3779,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3604,
        "y": 10231,
        "z": 0,
        "mapId": 30,
        "name": "Fossil Island Underground"
      }
    },
    {
      "start": {
        "x": 3748,
        "y": 2973,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3750,
        "y": 9373,
        "z": 0,
        "mapId": 15,
        "name": "Mos Le'Harmless Cave"
      }
    },
    {
      "start": {
        "x": 3766,
        "y": 3898,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3732,
        "y": 10281,
        "z": 1,
        "mapId": 30,
        "name": "Fossil Island Underground"
      }
    },
    {
      "start": {
        "x": 3815,
        "y": 3062,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3815,
        "y": 9462,
        "z": 0,
        "mapId": 15,
        "name": "Mos Le'Harmless Cave"
      }
    },
    {
      "start": {
        "x": 3816,
        "y": 3808,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3808,
        "y": 10193,
        "z": 3,
        "mapId": 30,
        "name": "Fossil Island Underground"
      }
    },
    {
      "start": {
        "x": 3830,
        "y": 3062,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      },
      "end": {
        "x": 3830,
        "y": 9462,
        "z": 0,
        "mapId": 15,
        "name": "Mos Le'Harmless Cave"
      }
    }
  ],
  "Varlamore Underground": [
    {
      "start": {
        "x": 1358,
        "y": 9320,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      },
      "end": {
        "x": 1357,
        "y": 2920,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1389,
        "y": 9316,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      },
      "end": {
        "x": 1389,
        "y": 2916,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1448,
        "y": 9338,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      },
      "end": {
        "x": 1448,
        "y": 2938,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1470,
        "y": 9327,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      },
      "end": {
        "x": 1476,
        "y": 2927,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1488,
        "y": 9502,
        "z": 1,
        "mapId": 43,
        "name": "Varlamore Underground"
      },
      "end": {
        "x": 1497,
        "y": 3132,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1558,
        "y": 9449,
        "z": 1,
        "mapId": 43,
        "name": "Varlamore Underground"
      },
      "end": {
        "x": 1558,
        "y": 3049,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1615,
        "y": 9574,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      },
      "end": {
        "x": 1614,
        "y": 3174,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1623,
        "y": 9563,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      },
      "end": {
        "x": 1623,
        "y": 3165,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1641,
        "y": 9564,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      },
      "end": {
        "x": 1641,
        "y": 3166,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1692,
        "y": 9480,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      },
      "end": {
        "x": 1693,
        "y": 3084,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1692,
        "y": 9492,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      },
      "end": {
        "x": 1693,
        "y": 3089,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1797,
        "y": 9506,
        "z": 0,
        "mapId": 43,
        "name": "Varlamore Underground"
      },
      "end": {
        "x": 1795,
        "y": 3107,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Kourend Underground": [
    {
      "start": {
        "x": 1371,
        "y": 10078,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1433,
        "y": 3670,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1432,
        "y": 9849,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1420,
        "y": 3588,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1451,
        "y": 10078,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1483,
        "y": 3549,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1597,
        "y": 9900,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1604,
        "y": 3508,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1617,
        "y": 10102,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1563,
        "y": 3791,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1646,
        "y": 9849,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1644,
        "y": 3449,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1650,
        "y": 9986,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1470,
        "y": 3653,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1666,
        "y": 10051,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1637,
        "y": 3673,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1719,
        "y": 10102,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1696,
        "y": 3865,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1726,
        "y": 9993,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1666,
        "y": 3565,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1800,
        "y": 9968,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1670,
        "y": 3567,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1830,
        "y": 9973,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1702,
        "y": 3574,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1877,
        "y": 10145,
        "z": 0,
        "mapId": 32,
        "name": "Kourend Underground"
      },
      "end": {
        "x": 1813,
        "y": 3745,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Cam Torum": [
    {
      "start": {
        "x": 1440,
        "y": 9508,
        "z": 1,
        "mapId": 44,
        "name": "Cam Torum"
      },
      "end": {
        "x": 1436,
        "y": 3131,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1440,
        "y": 9602,
        "z": 0,
        "mapId": 44,
        "name": "Cam Torum"
      },
      "end": {
        "x": 1440,
        "y": 9613,
        "z": 1,
        "mapId": 45,
        "name": "Neypotzli"
      }
    }
  ],
  "Neypotzli": [
    {
      "start": {
        "x": 1440,
        "y": 9549,
        "z": 1,
        "mapId": 45,
        "name": "Neypotzli"
      },
      "end": {
        "x": 1440,
        "y": 9602,
        "z": 1,
        "mapId": 44,
        "name": "Cam Torum"
      }
    }
  ],
  "Feldip Hills Underground": [
    {
      "start": {
        "x": 1685,
        "y": 9195,
        "z": 1,
        "mapId": 31,
        "name": "Feldip Hills Underground"
      },
      "end": {
        "x": 2131,
        "y": 2994,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1849,
        "y": 9116,
        "z": 1,
        "mapId": 31,
        "name": "Feldip Hills Underground"
      },
      "end": {
        "x": 2309,
        "y": 2919,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1937,
        "y": 9009,
        "z": 1,
        "mapId": 31,
        "name": "Feldip Hills Underground"
      },
      "end": {
        "x": 2457,
        "y": 2847,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1939,
        "y": 8966,
        "z": 1,
        "mapId": 31,
        "name": "Feldip Hills Underground"
      },
      "end": {
        "x": 2445,
        "y": 2819,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1971,
        "y": 9033,
        "z": 1,
        "mapId": 31,
        "name": "Feldip Hills Underground"
      },
      "end": {
        "x": 2483,
        "y": 2891,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2012,
        "y": 9005,
        "z": 1,
        "mapId": 31,
        "name": "Feldip Hills Underground"
      },
      "end": {
        "x": 2523,
        "y": 2861,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2038,
        "y": 9078,
        "z": 1,
        "mapId": 31,
        "name": "Feldip Hills Underground"
      },
      "end": {
        "x": 2526,
        "y": 2894,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Mole Hole": [
    {
      "start": {
        "x": 1752,
        "y": 5136,
        "z": 0,
        "mapId": 13,
        "name": "Mole Hole"
      },
      "end": {
        "x": 2986,
        "y": 3315,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Ancient Cavern": [
    {
      "start": {
        "x": 1763,
        "y": 5361,
        "z": 0,
        "mapId": 1,
        "name": "Ancient Cavern"
      },
      "end": {
        "x": 2531,
        "y": 3446,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Stronghold of Security": [
    {
      "start": {
        "x": 1859,
        "y": 5243,
        "z": 0,
        "mapId": 18,
        "name": "Stronghold of Security"
      },
      "end": {
        "x": 3081,
        "y": 3420,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1913,
        "y": 5226,
        "z": 0,
        "mapId": 18,
        "name": "Stronghold of Security"
      },
      "end": {
        "x": 3081,
        "y": 3420,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1957,
        "y": 4952,
        "z": 0,
        "mapId": 18,
        "name": "Stronghold of Security"
      },
      "end": {
        "x": 3081,
        "y": 3420,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 1998,
        "y": 4927,
        "z": 0,
        "mapId": 18,
        "name": "Stronghold of Security"
      },
      "end": {
        "x": 3081,
        "y": 3420,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Miscellania Underground": [
    {
      "start": {
        "x": 2138,
        "y": 10352,
        "z": 0,
        "mapId": 11,
        "name": "Miscellania Underground"
      },
      "end": {
        "x": 2142,
        "y": 3944,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2394,
        "y": 10297,
        "z": 0,
        "mapId": 11,
        "name": "Miscellania Underground"
      },
      "end": {
        "x": 2401,
        "y": 3889,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2461,
        "y": 10418,
        "z": 0,
        "mapId": 11,
        "name": "Miscellania Underground"
      },
      "end": {
        "x": 2465,
        "y": 4012,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2509,
        "y": 10246,
        "z": 0,
        "mapId": 11,
        "name": "Miscellania Underground"
      },
      "end": {
        "x": 2509,
        "y": 3846,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2618,
        "y": 10265,
        "z": 0,
        "mapId": 11,
        "name": "Miscellania Underground"
      },
      "end": {
        "x": 2620,
        "y": 3865,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2845,
        "y": 10353,
        "z": 0,
        "mapId": 11,
        "name": "Miscellania Underground"
      },
      "end": {
        "x": 2867,
        "y": 3941,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2857,
        "y": 10333,
        "z": 0,
        "mapId": 11,
        "name": "Miscellania Underground"
      },
      "end": {
        "x": 2843,
        "y": 3958,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Braindeath Island": [
    {
      "start": {
        "x": 2163,
        "y": 5115,
        "z": 0,
        "mapId": 4,
        "name": "Braindeath Island"
      },
      "end": {
        "x": 3681,
        "y": 3537,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Stronghold Underground": [
    {
      "start": {
        "x": 2275,
        "y": 9987,
        "z": 0,
        "mapId": 19,
        "name": "Stronghold Underground"
      },
      "end": {
        "x": 2278,
        "y": 3611,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2409,
        "y": 9811,
        "z": 0,
        "mapId": 19,
        "name": "Stronghold Underground"
      },
      "end": {
        "x": 2403,
        "y": 3419,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2429,
        "y": 9824,
        "z": 0,
        "mapId": 19,
        "name": "Stronghold Underground"
      },
      "end": {
        "x": 2429,
        "y": 3424,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2463,
        "y": 9897,
        "z": 0,
        "mapId": 19,
        "name": "Stronghold Underground"
      },
      "end": {
        "x": 2463,
        "y": 3497,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Yanille Underground": [
    {
      "start": {
        "x": 2404,
        "y": 9414,
        "z": 0,
        "mapId": 27,
        "name": "Yanille Underground"
      },
      "end": {
        "x": 2412,
        "y": 3061,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Waterbirth Dungeon": [
    {
      "start": {
        "x": 2439,
        "y": 10146,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      },
      "end": {
        "x": 2521,
        "y": 3740,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2544,
        "y": 10144,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      },
      "end": {
        "x": 2543,
        "y": 3741,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2562,
        "y": 9756,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      },
      "end": {
        "x": 2562,
        "y": 3356,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2569,
        "y": 9629,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      },
      "end": {
        "x": 2569,
        "y": 3229,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2621,
        "y": 9795,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      },
      "end": {
        "x": 2623,
        "y": 3393,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2632,
        "y": 9694,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      },
      "end": {
        "x": 2632,
        "y": 3294,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2661,
        "y": 9641,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      },
      "end": {
        "x": 2561,
        "y": 3320,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2696,
        "y": 9682,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      },
      "end": {
        "x": 2696,
        "y": 3283,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2724,
        "y": 9775,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      },
      "end": {
        "x": 2724,
        "y": 3375,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2734,
        "y": 10072,
        "z": 0,
        "mapId": 25,
        "name": "Waterbirth Dungeon"
      },
      "end": {
        "x": 2506,
        "y": 3634,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Zanaris": [
    {
      "start": {
        "x": 2452,
        "y": 4473,
        "z": 0,
        "mapId": 28,
        "name": "Zanaris"
      },
      "end": {
        "x": 3203,
        "y": 3169,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2486,
        "y": 4471,
        "z": 0,
        "mapId": 28,
        "name": "Zanaris"
      },
      "end": {
        "x": 3260,
        "y": 3171,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Mor Ul Rek": [
    {
      "start": {
        "x": 2480,
        "y": 5176,
        "z": 0,
        "mapId": 23,
        "name": "Mor Ul Rek"
      },
      "end": {
        "x": 2863,
        "y": 9572,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      }
    }
  ],
  "Ardougne Underground": [
    {
      "start": {
        "x": 2555,
        "y": 9658,
        "z": 0,
        "mapId": 2,
        "name": "Ardougne Underground"
      },
      "end": {
        "x": 2555,
        "y": 3258,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2571,
        "y": 9685,
        "z": 0,
        "mapId": 2,
        "name": "Ardougne Underground"
      },
      "end": {
        "x": 2587,
        "y": 3235,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Karamja Underground": [
    {
      "start": {
        "x": 2569,
        "y": 9522,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      },
      "end": {
        "x": 2569,
        "y": 3122,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2594,
        "y": 9486,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      },
      "end": {
        "x": 2594,
        "y": 3085,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2603,
        "y": 9479,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      },
      "end": {
        "x": 2604,
        "y": 3078,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2714,
        "y": 9564,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      },
      "end": {
        "x": 2744,
        "y": 3154,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2734,
        "y": 9477,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      },
      "end": {
        "x": 2760,
        "y": 3062,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2805,
        "y": 9590,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      },
      "end": {
        "x": 2809,
        "y": 3194,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2829,
        "y": 9522,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      },
      "end": {
        "x": 2825,
        "y": 3118,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2838,
        "y": 9388,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      },
      "end": {
        "x": 2825,
        "y": 2998,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2856,
        "y": 9569,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      },
      "end": {
        "x": 2856,
        "y": 3168,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2863,
        "y": 9572,
        "z": 0,
        "mapId": 9,
        "name": "Karamja Underground"
      },
      "end": {
        "x": 2480,
        "y": 5176,
        "z": 0,
        "mapId": 23,
        "name": "Mor Ul Rek"
      }
    }
  ],
  "Dorgesh-Kaan": [
    {
      "start": {
        "x": 2751,
        "y": 5375,
        "z": 0,
        "mapId": 5,
        "name": "Dorgesh-Kaan"
      },
      "end": {
        "x": 3318,
        "y": 9602,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      }
    }
  ],
  "Fremennik Slayer Cave": [
    {
      "start": {
        "x": 2809,
        "y": 10002,
        "z": 0,
        "mapId": 17,
        "name": "Fremennik Slayer Cave"
      },
      "end": {
        "x": 2797,
        "y": 3615,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Taverley Underground": [
    {
      "start": {
        "x": 2820,
        "y": 9884,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 2820,
        "y": 3484,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2823,
        "y": 9910,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 2823,
        "y": 3510,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2833,
        "y": 9657,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 2834,
        "y": 3256,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2842,
        "y": 10000,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 2833,
        "y": 3542,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2842,
        "y": 9824,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 2842,
        "y": 3424,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2847,
        "y": 9916,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 2847,
        "y": 3516,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2857,
        "y": 9919,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 2857,
        "y": 3519,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2873,
        "y": 9750,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 3250,
        "y": 3772,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2875,
        "y": 9864,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 2912,
        "y": 10172,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 2877,
        "y": 9880,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 2877,
        "y": 3480,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2884,
        "y": 9797,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 2884,
        "y": 3397,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2892,
        "y": 9907,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 2892,
        "y": 3507,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2958,
        "y": 9737,
        "z": 0,
        "mapId": 20,
        "name": "Taverley Underground"
      },
      "end": {
        "x": 2965,
        "y": 3331,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Troll Stronghold": [
    {
      "start": {
        "x": 2824,
        "y": 10050,
        "z": 0,
        "mapId": 22,
        "name": "Troll Stronghold"
      },
      "end": {
        "x": 2827,
        "y": 3647,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2959,
        "y": 10141,
        "z": 0,
        "mapId": 22,
        "name": "Troll Stronghold"
      },
      "end": {
        "x": 2831,
        "y": 3677,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2965,
        "y": 10153,
        "z": 0,
        "mapId": 22,
        "name": "Troll Stronghold"
      },
      "end": {
        "x": 2839,
        "y": 3690,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Keldagrim": [
    {
      "start": {
        "x": 2828,
        "y": 10116,
        "z": 0,
        "mapId": 10,
        "name": "Keldagrim"
      },
      "end": {
        "x": 2731,
        "y": 3713,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 2856,
        "y": 10087,
        "z": 0,
        "mapId": 10,
        "name": "Keldagrim"
      },
      "end": {
        "x": 2796,
        "y": 3718,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "God Wars Dungeon": [
    {
      "start": {
        "x": 2881,
        "y": 5311,
        "z": 0,
        "mapId": 7,
        "name": "God Wars Dungeon"
      },
      "end": {
        "x": 2918,
        "y": 3746,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Asgarnia Ice Cave": [
    {
      "start": {
        "x": 2924,
        "y": 9650,
        "z": 0,
        "mapId": 3,
        "name": "Asgarnia Ice Cave"
      },
      "end": {
        "x": 2924,
        "y": 3250,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3007,
        "y": 9550,
        "z": 0,
        "mapId": 3,
        "name": "Asgarnia Ice Cave"
      },
      "end": {
        "x": 3007,
        "y": 3150,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3026,
        "y": 9651,
        "z": 0,
        "mapId": 3,
        "name": "Asgarnia Ice Cave"
      },
      "end": {
        "x": 3018,
        "y": 3232,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3103,
        "y": 9576,
        "z": 0,
        "mapId": 3,
        "name": "Asgarnia Ice Cave"
      },
      "end": {
        "x": 3104,
        "y": 3162,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Ruins of Camdozaal": [
    {
      "start": {
        "x": 2952,
        "y": 5766,
        "z": 0,
        "mapId": 39,
        "name": "Ruins of Camdozaal"
      },
      "end": {
        "x": 2999,
        "y": 3493,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Wilderness Dungeons": [
    {
      "start": {
        "x": 3005,
        "y": 10363,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3005,
        "y": 3963,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3017,
        "y": 10133,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3017,
        "y": 3739,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3017,
        "y": 10249,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3069,
        "y": 3856,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3045,
        "y": 10329,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3045,
        "y": 3924,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3069,
        "y": 10256,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3017,
        "y": 3849,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3115,
        "y": 10352,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3090,
        "y": 3956,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3196,
        "y": 10056,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3103,
        "y": 3655,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3218,
        "y": 10058,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3103,
        "y": 3655,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3232,
        "y": 10352,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3231,
        "y": 3952,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3233,
        "y": 10331,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3232,
        "y": 3936,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3241,
        "y": 10234,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3123,
        "y": 3806,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3243,
        "y": 10352,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3244,
        "y": 3949,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3245,
        "y": 10215,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3123,
        "y": 3806,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3286,
        "y": 10076,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3203,
        "y": 3681,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3295,
        "y": 10189,
        "z": 1,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3360,
        "y": 10273,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3336,
        "y": 10286,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3261,
        "y": 3833,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3359,
        "y": 10244,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3283,
        "y": 3775,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3359,
        "y": 10313,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3360,
        "y": 10273,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    },
    {
      "start": {
        "x": 3360,
        "y": 10273,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3285,
        "y": 3808,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3383,
        "y": 10288,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3321,
        "y": 3831,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3384,
        "y": 10050,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3260,
        "y": 3666,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3405,
        "y": 10146,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3293,
        "y": 3746,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3423,
        "y": 10182,
        "z": 2,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      },
      "end": {
        "x": 3360,
        "y": 10273,
        "z": 0,
        "mapId": 26,
        "name": "Wilderness Dungeons"
      }
    }
  ],
  "Ourania Altar": [
    {
      "start": {
        "x": 3015,
        "y": 5630,
        "z": 0,
        "mapId": 16,
        "name": "Ourania Altar"
      },
      "end": {
        "x": 2452,
        "y": 3231,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Dwarven Mines": [
    {
      "start": {
        "x": 3019,
        "y": 9739,
        "z": 0,
        "mapId": 6,
        "name": "Dwarven Mines"
      },
      "end": {
        "x": 3019,
        "y": 3339,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3019,
        "y": 9850,
        "z": 0,
        "mapId": 6,
        "name": "Dwarven Mines"
      },
      "end": {
        "x": 3019,
        "y": 3450,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3059,
        "y": 9778,
        "z": 0,
        "mapId": 6,
        "name": "Dwarven Mines"
      },
      "end": {
        "x": 3059,
        "y": 3377,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3084,
        "y": 9672,
        "z": 0,
        "mapId": 6,
        "name": "Dwarven Mines"
      },
      "end": {
        "x": 3084,
        "y": 3272,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Misthalin Underground": [
    {
      "start": {
        "x": 3081,
        "y": 9774,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3115,
        "y": 3357,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3088,
        "y": 9971,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3088,
        "y": 3571,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3097,
        "y": 9867,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3097,
        "y": 3468,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3116,
        "y": 9852,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3116,
        "y": 3452,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3117,
        "y": 9754,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3092,
        "y": 3362,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3118,
        "y": 9642,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3118,
        "y": 3244,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3149,
        "y": 9653,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3166,
        "y": 3252,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3158,
        "y": 9714,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3150,
        "y": 3347,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3169,
        "y": 9572,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3169,
        "y": 3172,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3190,
        "y": 9758,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3190,
        "y": 3355,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3209,
        "y": 9616,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3209,
        "y": 3216,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3230,
        "y": 9904,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3230,
        "y": 3504,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3237,
        "y": 9858,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3237,
        "y": 3458,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3244,
        "y": 9783,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 3244,
        "y": 3383,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3318,
        "y": 9602,
        "z": 0,
        "mapId": 12,
        "name": "Misthalin Underground"
      },
      "end": {
        "x": 2751,
        "y": 5375,
        "z": 0,
        "mapId": 5,
        "name": "Dorgesh-Kaan"
      }
    }
  ],
  "Tolna's Rift": [
    {
      "start": {
        "x": 3105,
        "y": 5279,
        "z": 0,
        "mapId": 21,
        "name": "Tolna's Rift"
      },
      "end": {
        "x": 3309,
        "y": 3450,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Kharidian Desert Underground": [
    {
      "start": {
        "x": 3195,
        "y": 9510,
        "z": 0,
        "mapId": 42,
        "name": "Kharidian Desert Underground"
      },
      "end": {
        "x": 3227,
        "y": 3108,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3359,
        "y": 9257,
        "z": 0,
        "mapId": 42,
        "name": "Kharidian Desert Underground"
      },
      "end": {
        "x": 3358,
        "y": 2711,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3369,
        "y": 9497,
        "z": 0,
        "mapId": 42,
        "name": "Kharidian Desert Underground"
      },
      "end": {
        "x": 3320,
        "y": 3122,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3454,
        "y": 9577,
        "z": 0,
        "mapId": 42,
        "name": "Kharidian Desert Underground"
      },
      "end": {
        "x": 3361,
        "y": 3150,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Prifddinas": [
    {
      "start": {
        "x": 3207,
        "y": 6079,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      },
      "end": {
        "x": 2183,
        "y": 3327,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3225,
        "y": 6044,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      },
      "end": {
        "x": 3225,
        "y": 12446,
        "z": 0,
        "mapId": 34,
        "name": "Prifddinas Underground"
      }
    },
    {
      "start": {
        "x": 3228,
        "y": 6116,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      },
      "end": {
        "x": 3032,
        "y": 6123,
        "z": 1,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 3263,
        "y": 6022,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      },
      "end": {
        "x": 2239,
        "y": 3270,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3263,
        "y": 6136,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      },
      "end": {
        "x": 2239,
        "y": 3384,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3271,
        "y": 6049,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      },
      "end": {
        "x": 3302,
        "y": 12455,
        "z": 0,
        "mapId": 34,
        "name": "Prifddinas Underground"
      }
    },
    {
      "start": {
        "x": 3281,
        "y": 6059,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      },
      "end": {
        "x": 3033,
        "y": 6069,
        "z": 0,
        "mapId": -666,
        "name": "undefined"
      }
    },
    {
      "start": {
        "x": 3321,
        "y": 6079,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      },
      "end": {
        "x": 2297,
        "y": 3327,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Prifddinas Underground": [
    {
      "start": {
        "x": 3224,
        "y": 12499,
        "z": 0,
        "mapId": 34,
        "name": "Prifddinas Underground"
      },
      "end": {
        "x": 3228,
        "y": 6116,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      }
    },
    {
      "start": {
        "x": 3225,
        "y": 12446,
        "z": 0,
        "mapId": 34,
        "name": "Prifddinas Underground"
      },
      "end": {
        "x": 3225,
        "y": 6044,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      }
    },
    {
      "start": {
        "x": 3289,
        "y": 12469,
        "z": 0,
        "mapId": 34,
        "name": "Prifddinas Underground"
      },
      "end": {
        "x": 3281,
        "y": 6059,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      }
    },
    {
      "start": {
        "x": 3302,
        "y": 12391,
        "z": 0,
        "mapId": 34,
        "name": "Prifddinas Underground"
      },
      "end": {
        "x": 3271,
        "y": 6049,
        "z": 0,
        "mapId": 29,
        "name": "Prifddinas"
      }
    }
  ],
  "Morytania Underground": [
    {
      "start": {
        "x": 3389,
        "y": 9899,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3405,
        "y": 3506,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3412,
        "y": 9931,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3417,
        "y": 3535,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3424,
        "y": 9878,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3422,
        "y": 3484,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3477,
        "y": 9846,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3495,
        "y": 3464,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3490,
        "y": 9591,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3489,
        "y": 3231,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3493,
        "y": 9702,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3485,
        "y": 3321,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3549,
        "y": 9864,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3543,
        "y": 3462,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3679,
        "y": 9796,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3657,
        "y": 3409,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3683,
        "y": 9888,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3653,
        "y": 3519,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3716,
        "y": 9707,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3719,
        "y": 3307,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3722,
        "y": 9866,
        "z": 0,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3681,
        "y": 3498,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3726,
        "y": 9756,
        "z": 1,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3725,
        "y": 3356,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3738,
        "y": 9702,
        "z": 1,
        "mapId": 14,
        "name": "Morytania Underground"
      },
      "end": {
        "x": 3728,
        "y": 3300,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "LMS Desert Island": [
    {
      "start": {
        "x": 3457,
        "y": 5885,
        "z": 0,
        "mapId": 36,
        "name": "LMS Desert Island"
      },
      "end": {
        "x": 3142,
        "y": 3635,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Fossil Island Underground": [
    {
      "start": {
        "x": 3596,
        "y": 10292,
        "z": 1,
        "mapId": 30,
        "name": "Fossil Island Underground"
      },
      "end": {
        "x": 3678,
        "y": 3854,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3604,
        "y": 10231,
        "z": 0,
        "mapId": 30,
        "name": "Fossil Island Underground"
      },
      "end": {
        "x": 3746,
        "y": 3779,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3732,
        "y": 10281,
        "z": 1,
        "mapId": 30,
        "name": "Fossil Island Underground"
      },
      "end": {
        "x": 3766,
        "y": 3898,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3903,
        "y": 10225,
        "z": 0,
        "mapId": 30,
        "name": "Fossil Island Underground"
      },
      "end": {
        "x": 3816,
        "y": 3808,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ],
  "Mos Le'Harmless Cave": [
    {
      "start": {
        "x": 3750,
        "y": 9373,
        "z": 0,
        "mapId": 15,
        "name": "Mos Le'Harmless Cave"
      },
      "end": {
        "x": 3748,
        "y": 2973,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3815,
        "y": 9462,
        "z": 0,
        "mapId": 15,
        "name": "Mos Le'Harmless Cave"
      },
      "end": {
        "x": 3815,
        "y": 3062,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    },
    {
      "start": {
        "x": 3830,
        "y": 9462,
        "z": 0,
        "mapId": 15,
        "name": "Mos Le'Harmless Cave"
      },
      "end": {
        "x": 3830,
        "y": 3062,
        "z": 0,
        "mapId": 0,
        "name": "Gielinor Surface"
      }
    }
  ]
}