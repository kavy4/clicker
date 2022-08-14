let balance = 0, Xbalance = 1, Abalance = 0

setInterval(() => {
    balance += Abalance
    document.getElementById('main_balance').textContent = 'Баланс ' + (balance).toLocaleString('ru')
    document.getElementById('casino_cube_header_balance').textContent = 'Баланс ' + (balance).toLocaleString('ru') + ' коинов'
    document.getElementById('main_Xbalance').textContent = Xbalance + ' коинов/клик'
    document.getElementById('main_Abalance').textContent = Abalance + ' коинов/сек'
}, 1000)

let shopSucces = document.getElementsByClassName('shop_card_succes')

let shopError = document.getElementsByClassName('shop_card_error')

let shopPrice1 = 100

let shopPrice1Title = document.getElementById('shop_price1')

shopPrice1Title.textContent = 'Цена ' + shopPrice1 + ' коинов'

let shopPrice2 = 100

let shopPrice2Title = document.getElementById('shop_price2')

shopPrice2Title.textContent = 'Цена ' +  shopPrice2 + ' коинов'

function Klick()
{
    balance += Xbalance
    document.getElementById('main_balance').textContent = 'Баланс ' + (balance).toLocaleString('ru')
}

// shop

function ShopHide()
{
    document.getElementById('main').style.display = 'none'
    document.getElementById('shop').style.display = 'block'
}

function ShopClose()
{
    main.style.display = 'block'
    shop.style.display = 'none'
    for (let el of shopSucces)
    {
        el.style.display = 'none'
    }

    for (let el of shopError)
    {
        el.style.display = 'none'
    }
}

function BuyAutoMoney()
{
    if (balance >= shopPrice2)
    {
        balance -= shopPrice2
        shopPrice2 *= 1.5
        shopPrice2Title.textContent = 'Цена ' + shopPrice2 + ' коинов'
        Abalance++
        document.getElementById('shop_card_succes2').style.display = 'block'
    }
    else
    {
        document.getElementById('shop_card_error2').style.display = 'block'
    }
}

function BuyKlickerBAFF()
{
    if (balance >= shopPrice1)
    {
        balance -= shopPrice1
        shopPrice1 *= 1.5
        shopPrice1Title.textContent = 'Цена ' + shopPrice1 + ' коинов'
        Xbalance++
        document.getElementById('shop_card_succes1').style.display = 'block'
    }
    else
    {
        document.getElementById('shop_card_error1').style.display = 'block'
    }
}

// shop

// casino

function CasinoHide()
{
    document.getElementById('main').style.display = 'none'
    document.getElementById('casino').style.display = 'block'
}

function CasinoClose()
{
    document.getElementById('main').style.display = 'block'
    document.getElementById('casino').style.display = 'none'
}

// casino

// cube

function CubeHide()
{
    document.getElementById('casino_menu').style.display = 'none'
    document.getElementById('casino_cube').style.display = 'block'
    document.getElementById('casino_cube_header_balance').textContent = 'Баланс ' + (balance).toLocaleString('ru') + ' коинов'
}

function CubeClose()
{
    document.getElementById('casino_menu').style.display = 'block'
    document.getElementById('casino_cube').style.display = 'none'
    for (let el of document.getElementsByClassName('casino_cube_card_stats'))
    {
        el.style.display = 'none'
    }
}

var cubeCheckboxValue

var cubeInput

function SendCubeCheckBox()
{
    for (let el of document.getElementsByClassName('casino_cube_card_stats'))
    {
        el.style.display = 'none'
    }
    let cubeCheckboxArr = document.getElementsByClassName('casino_cube_card_select_rb')
    for (let i = 0; i < cubeCheckboxArr.length; i++)
    {
        if (cubeCheckboxArr[i].checked)
        {
            cubeCheckboxValue = cubeCheckboxArr[i].value
            break
        }
    }

    cubeInput = document.getElementById('casino_cube_card_group_input').value
    if (balance >= cubeInput)
    {
        CubeCasino()
    }
    else
    {
        document.getElementById('casino_cube_card_error').textContent = 'Ошибка! Не хвает денег'
        document.getElementById('casino_cube_card_error').style.display = 'block'
    }
}

function CubeCasino()
{
    balance -= cubeInput
    let randNum = Math.floor(Math.random() * (13 - 1) + 1)
    console.log(randNum)
    if (cubeCheckboxValue == 1)
    {
        if (randNum < 7)
        {
            let cubWin = cubeInput *= 2
            balance += cubWin
            console.log('ура пбда')
            document.getElementById('casino_cube_card_succes').textContent = 'Победа! Выйгрыш ' + cubWin
            document.getElementById('casino_cube_card_succes').style.display = 'block'
        }
        else
        {
            console.log('хаха лих')
            document.getElementById('casino_cube_card_error').textContent = 'Проигрыш!'
            document.getElementById('casino_cube_card_error').style.display = 'block'
        }
    }
    if (cubeCheckboxValue == 2)
    {
        if (randNum > 7)
        {
            let cubWin = cubeInput *= 2
            balance += cubWin
            console.log('ура пбда')
            document.getElementById('casino_cube_card_succes').textContent = 'Победа! Выйгрыш ' + cubWin
            document.getElementById('casino_cube_card_succes').style.display = 'block'
        }
        else
        {
            console.log('хаха лих')
            document.getElementById('casino_cube_card_error').textContent = 'Проигрыш!'
            document.getElementById('casino_cube_card_error').style.display = 'block'
        }
    }
    if (cubeCheckboxValue == 3)
    {
        if (randNum == 7)
        {
            let cubWin = cubeInput *= 5
            balance += cubWin
            console.log('ура пбда')
            document.getElementById('casino_cube_card_succes').textContent = 'Победа! Выйгрыш ' + cubWin
            document.getElementById('casino_cube_card_succes').style.display = 'block'
        }
        else
        {
            console.log('хаха лих')
            document.getElementById('casino_cube_card_error').textContent = 'Проигрыш!'
            document.getElementById('casino_cube_card_error').style.display = 'block'
        }
    }
}

// cube

// transfer

function TransferHide()
{
    document.getElementById('main').style.display = 'none'
    document.getElementById('transfer').style.display = 'block'
}

function TransferClose()
{
    document.getElementById('transfer').style.display = 'none'
    document.getElementById('main').style.display = 'block'
}

// transfer