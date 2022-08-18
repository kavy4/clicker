let balance = 0, Xbalance = 1, Abalance = 0

setInterval(() => {
    balance += Abalance
    document.getElementById('main_balance').textContent = 'Баланс ' + (balance).toLocaleString('ru') + ' коинов'
    document.getElementById('transfer_get_header_balance').textContent = 'Баланс ' + (balance).toLocaleString('ru') + ' коинов'
    document.getElementById('casino_cube_header_balance').textContent = 'Баланс ' + (balance).toLocaleString('ru') + ' коинов'
    document.getElementById('shop_footer_balance').textContent = 'Баланс ' + (balance).toLocaleString('ru') + ' коинов'
    document.getElementById('transfer_send_header_balance').textContent = 'Баланс ' + (balance).toLocaleString('ru') + ' коинов'
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
    document.getElementById('main_balance').textContent = 'Баланс ' + (balance).toLocaleString('ru') + ' коинов'
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
    console.log('dqwdqwdqwd')
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

    cubeInput = document.getElementById('casino_cube_card_form_input').value
    if (balance >= cubeInput && cubeInput > 0)
    {
        CubeCasino()
    }
    else
    {
        document.getElementById('casino_cube_card_error').textContent = 'Ошибка! Не хвает денег'
        document.getElementById('casino_cube_card_error').style.display = 'block'
    }
    cubeInput = document.getElementById('casino_cube_card_form_input').value = ''
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

// transferSend

function TransferSendHide()
{
    document.getElementById('transfer_menu').style.display = 'none'
    document.getElementById('transfer_send').style.display = 'block'
}

function TransferSendClose()
{
    for (let el of document.getElementsByClassName('transfer_send_card_stats'))
    {
        el.style.display = 'none'
    }
    document.getElementById('transfer_menu').style.display = 'block'
    document.getElementById('transfer_send').style.display = 'none'
}

function TransferSendForm()
{
    for (let el of document.getElementsByClassName('transfer_send_card_stats'))
    {
        el.style.display = 'none'
    }
    if (balance >= document.getElementById('transfer_send_card_form_input').value && document.getElementById('transfer_send_card_form_input').value > 0)
    {
        balance -= document.getElementById('transfer_send_card_form_input').value
        document.getElementById('transfer_send_card_succes').textContent = 'Успешно! Скопируй и перешли это получателю: ' + document.getElementById('transfer_send_card_form_input').value
        document.getElementById('transfer_send_card_succes').style.display = 'block'
    }
    else
    {
        document.getElementById('transfer_send_card_error').textContent = 'Ошибка! Не хватает денег'
        document.getElementById('transfer_send_card_error').style.display = 'block'
    }
}

// transferSend

// transferGet

function TransferGetHide()
{
    document.getElementById('transfer_menu').style.display = 'none'
    document.getElementById('transfer_get').style.display = 'block'
}

function TransferGetClose()
{
    document.getElementById('transfer_get').style.display = 'none'
    document.getElementById('transfer_menu').style.display = 'block'
}

function TransferGetSendForm()
{
    balance += Number(document.getElementById('transfer_get_card_form_input').value)
}

// transferGet