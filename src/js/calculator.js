let sroki = 0
let cost = 0;
let type = '0', design = '0', adapt = '0';
let ans = ['1', '2', '3']

while (!ans.includes(type)){
    type = prompt("Выберите тип сайта, который хотите заказать:\n \
    Введите 1 если сайт-визитка (+1000р)\n \
    Введите 2 если корпоративный сайт (+5000р)\n \
    Введите 3 если сайт-сервис (+3000р)");
    }

if (type == '1'){
    sroki += 2;
    cost += 1000
}

else if (type == '2'){
    sroki += 10;
    cost += 5000
}

else if (type == '3'){
    sroki += 6;
    cost += 3000;
}
while (!['1', '2'].includes(design)){
    design = prompt("Выберите дизайн:\n \
    Введите 1 если хотите простой дизайн (+0р)\n \
    Введите 2 если хотите дизайнерскую работу (+5000р)\n");
}

if (type == '1'){
    sroki += 1;
    cost += 0
}

else if (type == '2'){
    sroki += 5;
    cost += 5000
}

while (!ans.includes(adapt)){
    adapt = prompt("Выберите адаптивность:\n \
    Введите 1 если хотите, чтобы сайт был адаптирован под все устройства (+5000р)\n \
    Введите 2 если хотите, чтобы сайт был адаптирован только под пк (+2500р)\n \
    Введите 3 если хотите, чтобы сайт был адаптирован только под мобильные устройства (+2500р)\n");
}

if (adapt == '1'){
    sroki += 2;
    cost += 5000
}

else if (adapt == '2'){
    sroki += 1;
    cost += 2500
}

else if (adapt == '3'){
    sroki += 1;
    cost += 2500;
}
alert(`Сроки - ${sroki} дней \n Стоимость - ${cost} рублей`)
console.log(type, design, adapt);
console.log(sroki, cost)