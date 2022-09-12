const goods = [
    {
        id: 1,
        name: 'Рубашка',
        description: 'Рубашка',
        sizes: ['S', 'M', 'L'],
        price: 100,
        available: true,
    },
    {
        id: 2,
        name: 'Ботинки',
        description: 'Ботинки',
        sizes: [41, 42, 44],
        price: 200,
        available: true,
    },
    {
        id: 3,
        name: 'Брюки',
        description: 'Брюки',
        sizes: ['S', 'M'],
        price: 150,
        available: true,
    },
    {
        id: 4,
        name: 'Шапка',
        description: 'Шапка',
        sizes: ['SM', 'M', 'XL'],
        price: 50,
        available: false,
    },
    {
        id: 5,
        name: 'Футболка',
        description: 'Футболка',
        sizes: [46, 48, 50],
        price: 80,
        available: true,
    },
];

const basket = [    
    {
        goodId: 5,
        amount: 3,
    },
    {
        goodId: 2,
        amount: 2,
    },
];

function addGoods(id, amount) {
    let i = 0
    do {
        if (isAvailable(id)) {
            if (isInBasket(id).availability) {                
                basket[isInBasket(id).goodNumber].amount += amount;
                break;
                }   
            else {
                basket.push({goodId: id, amount: amount});
                break;
            };
                
        }
        i++;
    }
    while (i < basket.length);

    for (let i = 0; i < basket.length; i++) {
        
        }
    }

function delGoods(id) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].goodId == id) {
            basket.splice(i, 1);
        }
    }    
}

function countGoodsInbasket() {
    let totalAmount = 0;
    let totalSum = 0;
    for (let i = 0; i < basket.length; i++) {
        totalAmount += basket[i].amount;
        for (let j = 0; j < goods.length; j++) {
            if (goods[j].id == basket[i].goodId) {
                totalSum += goods[j].price * basket[i].amount;
            }
        }
    }
    return {totalAmount, totalSum};
}

function cleanBasket() {
    basket.splice(0, basket.length);
}

addGoods(2, 3);
addGoods(3, 3);
addGoods(4, 2);

cleanBasket()

addGoods(3, 3);
addGoods(5, 2);
addGoods(1, 2);
delGoods(5);

console.log(countGoodsInbasket())

function isAvailable(id) {
    for (let i = 0; i < goods.length; i++) {
        if (goods[i].id === id) {
            return goods[i].available ? true : false;
        }        
    }
}

function isInBasket(id) {
    let goodInBasket = false;
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].goodId === id) {
            return goodInBasket = {availability: true, goodNumber: i};
        }
        else {
            continue;
        }
    }
    return goodInBasket = {availability: false};
}