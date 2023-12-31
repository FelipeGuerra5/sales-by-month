const data = [
    {
        "Category": "Dairy",
        "Product": "Milk and Derivatives",
        "Brand": "MooMilk Co.",
        "MonthlySales": [
            { "month": "January", "sales": 1200 },
            { "month": "February", "sales": 1450 },
            { "month": "March", "sales": 1100 },
            { "month": "April", "sales": 1300 },
            { "month": "May", "sales": 1120 },
            { "month": "June", "sales": 1050 },
            { "month": "July", "sales": 1300 },
            { "month": "August", "sales": 1400 },
            { "month": "September", "sales": 1150 },
            { "month": "October", "sales": 1250 },
            { "month": "November", "sales": 1100 },
            { "month": "December", "sales": 1350 }
        ]
    },
    {
        "Category": "Dairy",
        "Product": "Cheese",
        "Brand": "Cheesy Delights",
        "MonthlySales": [
            { "month": "January", "sales": 850 },
            { "month": "February", "sales": 900 },
            { "month": "March", "sales": 880 },
            { "month": "April", "sales": 950 },
            { "month": "May", "sales": 920 },
            { "month": "June", "sales": 880 },
            { "month": "July", "sales": 920 },
            { "month": "August", "sales": 950 },
            { "month": "September", "sales": 930 },
            { "month": "October", "sales": 960 },
            { "month": "November", "sales": 900 },
            { "month": "December", "sales": 940 }
        ]
    },
    {
        "Category": "Dairy",
        "Product": "Yogurt",
        "Brand": "Healthy Bites",
        "MonthlySales": [
            { "month": "January", "sales": 710 },
            { "month": "February", "sales": 760 },
            { "month": "March", "sales": 690 },
            { "month": "April", "sales": 780 },
            { "month": "May", "sales": 750 },
            { "month": "June", "sales": 770 },
            { "month": "July", "sales": 800 },
            { "month": "August", "sales": 770 },
            { "month": "September", "sales": 790 },
            { "month": "October", "sales": 760 },
            { "month": "November", "sales": 810 },
            { "month": "December", "sales": 830 }
        ]
    },
    {
        "Category": "Cleaning",
        "Product": "Strong Cleaning",
        "Brand": "CleanMaster",
        "MonthlySales": [
            { "month": "January", "sales": 500 },
            { "month": "February", "sales": 550 },
            { "month": "March", "sales": 480 },
            { "month": "April", "sales": 600 },
            { "month": "May", "sales": 530 },
            { "month": "June", "sales": 560 },
            { "month": "July", "sales": 620 },
            { "month": "August", "sales": 570 },
            { "month": "September", "sales": 550 },
            { "month": "October", "sales": 580 },
            { "month": "November", "sales": 540 },
            { "month": "December", "sales": 590 }
        ]
    },
    {
        "Category": "Cleaning",
        "Product": "Soft Cleaning",
        "Brand": "GreenClean",
        "MonthlySales": [
            { "month": "January", "sales": 720 },
            { "month": "February", "sales": 780 },
            { "month": "March", "sales": 700 },
            { "month": "April", "sales": 800 },
            { "month": "May", "sales": 820 },
            { "month": "June", "sales": 750 },
            { "month": "July", "sales": 790 },
            { "month": "August", "sales": 770 },
            { "month": "September", "sales": 780 },
            { "month": "October", "sales": 760 },
            { "month": "November", "sales": 810 },
            { "month": "December", "sales": 830 }
        ]
    },
    {
        "Category": "Cleaning",
        "Product": "Surface Cleaners",
        "Brand": "FreshSurfaces",
        "MonthlySales": [
            { "month": "January", "sales": 380 },
            { "month": "February", "sales": 410 },
            { "month": "March", "sales": 390 },
            { "month": "April", "sales": 420 },
            { "month": "May", "sales": 400 },
            { "month": "June", "sales": 390 },
            { "month": "July", "sales": 420 },
            { "month": "August", "sales": 410 },
            { "month": "September", "sales": 400 },
            { "month": "October", "sales": 430 },
            { "month": "November", "sales": 400 },
            { "month": "December", "sales": 420 }
        ]
    },
    {
        "Category": "Raw Foods",
        "Product": "Fruits",
        "Brand": "FreshFruits Inc.",
        "MonthlySales": [
            { "month": "January", "sales": 2800 },
            { "month": "February", "sales": 2900 },
            { "month": "March", "sales": 3050 },
            { "month": "April", "sales": 3100 },
            { "month": "May", "sales": 3200 },
            { "month": "June", "sales": 3400 },
            { "month": "July", "sales": 3300 },
            { "month": "August", "sales": 3450 },
            { "month": "September", "sales": 3200 },
            { "month": "October", "sales": 3050 },
            { "month": "November", "sales": 3100 },
            { "month": "December", "sales": 3300 }
        ]
    },
    {
        "Category": "Raw Foods",
        "Product": "Vegetables",
        "Brand": "VeggieFresh",
        "MonthlySales": [
            { "month": "January", "sales": 2150 },
            { "month": "February", "sales": 2200 },
            { "month": "March", "sales": 2250 },
            { "month": "April", "sales": 2300 },
            { "month": "May", "sales": 2400 },
            { "month": "June", "sales": 2350 },
            { "month": "July", "sales": 2500 },
            { "month": "August", "sales": 2550 },
            { "month": "September", "sales": 2450 },
            { "month": "October", "sales": 2300 },
            { "month": "November", "sales": 2200 },
            { "month": "December", "sales": 2350 }
        ]
    },
    {
        "Category": "Soft Cleaning",
        "Product": "Carbos",
        "Brand": "GreenClean",
        "MonthlySales": [
            { "month": "January", "sales": 720 },
            { "month": "February", "sales": 780 },
            { "month": "March", "sales": 700 },
            { "month": "April", "sales": 800 },
            { "month": "May", "sales": 820 },
            { "month": "June", "sales": 750 },
            { "month": "July", "sales": 790 },
            { "month": "August", "sales": 770 },
            { "month": "September", "sales": 780 },
            { "month": "October", "sales": 760 },
            { "month": "November", "sales": 810 },
            { "month": "December", "sales": 830 }
        ]
    },
    {
        "Category": "Soft Cleaning",
        "Product": "Fabric Fresheners",
        "Brand": "FreshScents",
        "MonthlySales": [
            { "month": "January", "sales": 310 },
            { "month": "February", "sales": 350 },
            { "month": "March", "sales": 300 },
            { "month": "April", "sales": 360 },
            { "month": "May", "sales": 330 },
            { "month": "June", "sales": 350 },
            { "month": "July", "sales": 380 },
            { "month": "August", "sales": 360 },
            { "month": "September", "sales": 340 },
            { "month": "October", "sales": 370 },
            { "month": "November", "sales": 320 },
            { "month": "December", "sales": 340 }
        ]
    },
    {
        "Category": "Beverages",
        "Product": "Sodas",
        "Brand": "FizzFizz",
        "MonthlySales": [
            { "month": "January", "sales": 2200 },
            { "month": "February", "sales": 2250 },
            { "month": "March", "sales": 2100 },
            { "month": "April", "sales": 2350 },
            { "month": "May", "sales": 2400 },
            { "month": "June", "sales": 2500 },
            { "month": "July", "sales": 2450 },
            { "month": "August", "sales": 2300 },
            { "month": "September", "sales": 2400 },
            { "month": "October", "sales": 2500 },
            { "month": "November", "sales": 2300 },
            { "month": "December", "sales": 2350 }
        ]
    },
    {
        "Category": "Beverages",
        "Product": "Juices",
        "Brand": "HealthyJuices",
        "MonthlySales": [
            { "month": "January", "sales": 1750 },
            { "month": "February", "sales": 1800 },
            { "month": "March", "sales": 1850 },
            { "month": "April", "sales": 1900 },
            { "month": "May", "sales": 1950 },
            { "month": "June", "sales": 2000 },
            { "month": "July", "sales": 2050 },
            { "month": "August", "sales": 2100 },
            { "month": "September", "sales": 2150 },
            { "month": "October", "sales": 2200 },
            { "month": "November", "sales": 2250 },
            { "month": "December", "sales": 2300 }
        ]
    }
]

export default data