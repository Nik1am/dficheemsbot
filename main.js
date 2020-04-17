const Discord = require(`discord.js`);
const bot = new Discord.Client();
const config = require(`./config.json`);
bot.commands = new Discord.Collection() // создаём коллекцию для команд
const fs = require('fs') // подключаем fs к файлу

bot.on(`message` , async message => {
    let prefix = config.prexix;
if (message.content === `!dnd`) {
    bot.user.setPresence({status: 'dnd', game:{name: 'Красный', type: 2}})
};
if (message.content === `!online`) {
    bot.user.setPresence({status: 'online', game:{name: 'Зелёный', type: 2}})
};
if (message.content === `!eee`) {
    bot.user.setPresence({status: 'online', game:{name: 'eee', type: 2}})
    await 
    bot.user.setPresence({status: 'online', game:{name: 'Eee', type: 2}})
    await 
    bot.user.setPresence({status: 'online', game:{name: 'eEe', type: 2}})
    await 
    bot.user.setPresence({status: 'online', game:{name: 'eeE', type: 2}})
    await
    bot.user.setPresence({status: 'online', game:{name: 'eee', type: 2}})
};

    if (message.content.startsWith(`off!stream5`)) {
        message.channel.send({
            embed: {
                color: 0xe74c3c,
                author: {
                    name:'ФУГА TV',
                    icon_url:'https://yt3.ggpht.com/a-/AAuE7mC4blDV5dMPuiEgvTnN0e5qINQTP_XpfMdg8g=s48-mo-c-c0xffffffff-rj-k-no'
                },
                title: 'Стрим на канале ФУГА TV',
                url: 'https://www.youtube.com/channel/UCwKfmsba1g3SDcOzbU4zPXw/live',
                description: 'Это повисточка на стрим.',
               
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: '© NikIam'
                }
            }
        })
    };
    if (message.content.startsWith(`off!genagroup`)) {
        message.channel.send({
            embed: {
                color: 0xe74c3c,
                author: {
                    name:'MINETRENDS',
                    icon_url:'https://yt3.ggpht.com/a-/AAuE7mC4blDV5dMPuiEgvTnN0e5qINQTP_XpfMdg8g=s48-mo-c-c0xffffffff-rj-k-no'
                },
                title: 'Группа с свежими новостями о игре MINECRAFT',
                url: 'https://www.youtube.com/channel/UCwKfmsba1g3SDcOzbU4zPXw/live',
                               
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: '© NikIam'
                }
            }
        })
    };
    if (message.content.startsWith(`off!5help`)) {
        message.channel.send({
            embed: {
                color: 0xbadc58,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: 'Префикс бота - "!"',
                url: 'https://discord.js.org/#/docs/main/stable/class/MessageEmbed',
                description: 'Сдесь комманды бота.',
                fields: [
                    {
                        name: 'stream5',
                        value: 'Ссылка на стрим **ФУГА TV**'
                    },
                    {
                        inline: true,
                        name: 'genagroup',
                        value: 'Ссылка на группу Геннадия (Minetrends)'
                    },
                    {
                        inline: true,
                        name: 'about',
                        value: 'О боте'
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: 'Страница 1/2 | 5help 2 - страница №2'
                }
            }
        })
    };
    if (message.content.startsWith(`off!5help 2`)) {
        message.channel.send({
            embed: {
                color: 0xbadc58,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: 'Префикс бота - "!"',
                url: 'https://discord.js.org/#/docs/main/stable/class/MessageEmbed',
                description: 'Сдесь комманды бота.',
                fields: [
                    {
                        name: 'IP',
                        value: 'IP сервера'
                    },
                    {
                        inline: true,
                        name: 'invite5',
                        value: 'Ссылка на приглашение бота на сервер.'
                    },
                    {
                        inline: true,
                        name: '5group',
                        value: 'Офф. группа Пятёрки.'
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: 'Страница 2/2 '
                }
            }
        })
    };
    if (message.content.startsWith(`off!Revolycioner`)) {
        message.channel.send(`Не ну цэ тупа Бох.`)
    };
    if (message.content.startsWith(`off!ZZEFIRKA`)) {
        message.channel.send(`ZZefirka - парень Ленина. Его уже нет((( Грусно(`)
    }
    if (message.content.startsWith(`off!KB`)) {
        message.channel.send(`
        КБ - лучший город на СП!`)
    };
    if (message.content.startsWith(`off!Revolycia`)) {
        message.channel.send(`Неудачный ивент.`)
    };
    if (message.content.startsWith(`off!maslo`)) {
        message.channel.send(`Ты - маслёнок , что ты хочешь?`)
    };
    if (message.content.startsWith(`!about`)) {
        message.channel.send({
            embed: {
                color: 0x12CBC4,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: 'О боте',
                url: 'https://avatars.mds.yandex.net/get-pdb/1689173/87c72de4-a49d-43d0-b983-0db28802fa94/s1200',
                description: 'Это первый бот , он на половину тестовый , так что тут много секретов :wink:',
                fields: [
                    {
                        name: 'Бота создал:',
                        value: 'NikIam',
                        color: 0x12CBC4
                    },
                    {
                        inline: true,
                        name: 'Прога с помощью которой создан бот:',
                        value: 'Visual Studio Code',
                        url:'https://code.visualstudio.com/'
                    },
                    {
                        inline: true,
                        name: 'По урокам от:',
                        value: 'Daniyar Kurmangaliiev (спасибо ему :hugging:)',
                        url:'https://www.youtube.com/channel/UCP_7rWQRKPn-hrScLtZdvDg'
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: '© NikIam'
                }
            }
        })
    };
    if (message.content.startsWith(`off!WD`)) {
        message.channel.send(`!play Weird dream [NCS Relase]`)
    };
    if (message.content.startsWith(`off!MaC/\EHoK`)) {
        message.channel.send(`Что?`)
        await message.react('😂')
    };
    if (message.content.startsWith(`!УЙДИ!`)) {
        message.channel.send(`ок`)
        
    };
    if (message.content.startsWith(`off!POHAH`)) {
        message.channel.send(`№1 нарезчик!`)
        
    };
    if (message.content.startsWith(`off!IP`)) {
        message.channel.send(`IP сервера - nikiam.aternos.me`)
        
    };
    if (message.content.startsWith(`!inviteyyyyyyyyyy`)) {
        message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=532504535621566464&permissions=1342426112&scope=bot`)
        
    };
    if (message.content === `dev_embed_template_i_know_my_english_is_bad_lol`) {
        message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: 'Это эмбед',
                url: 'https://discord.js.org/#/docs/main/stable/class/MessageEmbed',
                description: 'Ваше описание',
                fields: [
                    {
                        name: 'Название',
                        value: 'Текст'
                    },
                    {
                        inline: true,
                        name: 'Поле 2',
                        value: 'Текст'
                    },
                    {
                        inline: true,
                        name: 'Поле 3',
                        value: 'Текст'
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL,
                    text: '© Пример'
                }
            }
        })
        await message.react('😂')
    };
    if (message.content === `CS:GO sv_cheats`) {
        message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: 'Command Help',
                url: 'https://discord.js.org/#/docs/main/stable/class/MessageEmbed',
                description: 'Thank you for using this bot',
                fields: [
                    {
                        name: 'sv_cheats',
                        value: 'Включает/выключает читы на на сервере.Доступен Администраторам/Создателям сервера/игры. Доступен во всех играх на движке Source.'
                    },
                    {
                        inline: true,
                        name: 'DELETEME',
                        value: 'sv_cheats 0/1'
                    },
                    {
                        inline: true,
                        name: 'DELETEME',
                        value: 'Текст'
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL,
                    text: '© Пример'
                }
            }
        })
    };
    if (message.content === `/coolname`) {
        message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: 'Твой крутой ник',
                description:`{[(___pRo___`+message.author.username+`2281337___GgWp____PrO____)]}`,
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL,
                    text: '© Пример'
                }
            }
        })
    };
    if (message.content === `r_drawjoy 1`) {await message.react('😂')
    };
    if(message.content === `Rack`) {
        message.channel.send(`${message.author.username}`);
    };
    if (message.content.startsWith(`!invite`)) {
        message.channel.send({
            embed: {
                color: 0xf0932b,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: 'Ссылка а инвайт',
                url: 'https://discordapp.com/oauth2/authorize?client_id=532504535621566464&permissions=1342426112&scope=bot',
                description: 'Это ссылка на инвайт бота.',
               
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL,
                    text: '© NikIam'
                }
            }
        })
        
    };
    if (message.content.startsWith(`off!5group`)) {
        message.channel.send({
            embed: {
                color: 0x3498db,
                author: {
                    name:'5opka',
                    icon_url:'https://sun9-8.userapi.com/c844521/v844521012/c8ae8/ggXHCSLrP0g.jpg?ava=1'
                },
                title: 'Оффициальнаю группа Пятёрки',
                url: 'https://vk.com/5opka',
                description: 'Только тут можно найти самые смешные мемы про Пятёрку , информацию о том будет или не будет стрима и т.д.',
               
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL,
                    text: '© NikIam'
                }
            }
        })
    };
    if (message.content === 'r965y89') {
        const embed = new Discord.RichEmbed()
        /**
         * Отображаеться в верхней части под .setAuthor()
         * .setURL() Ставит ссылку для вашего заголовка
         */
        .setTitle('Invite | Приглашение :point_left: ')
        .setURL('https://discordapp.com/oauth2/authorize?client_id=532504535621566464&permissions=1342426112&scope=bot')
        /**
         * Обычный текст под эмбедом, поддерживает блоки кодов    'https://cdn.discordapp.com/app-icons/532504535621566464/717cfb2069a8a2484ca076a03dfed345.png?size=64'
         */
        .setDescription('[Official Discord server | Офф. Discord сервер](https://discord.gg/zSUUWQh) :point_left: ')
        .setThumbnail('https://cdn.discordapp.com/attachments/462369157170724867/598069307951284237/unknown.png')
        .setColor(0x5aa2ff)
        message.channel.send(embed)
    };
    var botoffline = 'doctor11 lalka';

    if (message.content === botoffline) {
        await message.channel.send('Што ты ноделол? ;(')
        await process.exit();
    };
    if (message.content === 'Myname') {
        message.channel.send('Хмммм... Может '+message.author.username+'? Я правильно угадал?');
    };
    if (message.content.startsWith(`+rule34`)) {
        message.channel.send(`**Охладите траханье!** https://bit.ly/2ZDmiug`)
    };
    if (message.content.startsWith(`+Rule34`)) {
        message.channel.send(`**Охладите траханье!** https://bit.ly/2ZDmiug`)
    };
    if (message.content.startsWith(`Расстре`)) {
        message.channel.send(`Произошёл расстрел`)
    };
    if (message.content === 'РАССТРЕЛЯТЬ') {
        const embed = new Discord.RichEmbed()
        /**
         * Отображаеться в верхней части под .setAuthor()
         * .setURL() Ставит ссылку для вашего заголовка
         */
        .setTitle('Произошёл расстрел')
        .setImage('https://i.imgur.com/wUyMUmA.png')
        .setColor(0xff0000)
        message.channel.send(embed)
    };
    if (message.content === '/жители') {
        const embed = new Discord.RichEmbed()
        /**
         * Отображаеться в верхней части под .setAuthor()
         * .setURL() Ставит ссылку для вашего заголовка
         */
        .setTitle('Жители города')
        .setThumbnail('https://cdn.discordapp.com/icons/694664590079819786/d14d680197205657f57b3dbc9fed1583.png?size=128')
        .setColor(0x34495e)
        .addField("DoctorMaster12")
        message.channel.send(embed)
    };
    if (message.content === 'hack:[server_id:{372849298420}]/@@rules-to:SHO?=Admin/') {
        const embed = new Discord.RichEmbed()
        /**
         * Отображаеться в верхней части под .setAuthor()
         * .setURL() Ставит ссылку для вашего заголовка
         */
        .setTitle('Hacking server///')
        .setImage('https://media.discordapp.net/attachments/619180805528485899/662220068414816256/hacker_gif.gif')
        .setColor(0x00ff00)
        message.channel.send(embed)
    };
    if (message.content === '!корды') {
        const embed = new Discord.RichEmbed()
        /**
         * Отображаеться в верхней части под .setAuthor()
         * .setURL() Ставит ссылку для вашего заголовка
         */
        .setTitle('Корды разных мест:')
        .setColor(0x00ff00)
        .addField('Деревня ','1340 ~ 500')
        .addField('Спавнер скелетов ','1084 14 971')
        .addField('Крепость Ада ','911 64 404')
        .setThumbnail('https://camo.githubusercontent.com/c000ac2b1a0b16b53512a65fb18651d276e01120/68747470733a2f2f692e696d6775722e636f6d2f4536427169754e2e706e67')
        message.channel.send(embed)
    };
    if (message.content === '!restart'){
        function resetBot(channel) {
            // send channel a message that you're resetting bot [optional]
            channel.send('Resetting...')
            .then(msg => client.destroy())
            .then(() => client.login('NTMyNTA0NTM1NjIxNTY2NDY0.DxoGpA.9ejxSFoN9jtkTFqirnmut9mdRP4'));
        }
    };
    if (message.content.startsWith(`/suggestion`)) {
    await message.react(`✅`)
    await message.react(`❌`)
    };
    if (message.content.startsWith(`/sug`)) {
    await message.react(`✅`)
    await message.react(`❌`)
    };
    if (message.content === '!соглы') {
        const embed = new Discord.RichEmbed()
        /**
         * Отображаеться в верхней части под .setAuthor()
         * .setURL() Ставит ссылку для вашего заголовка
         */
        .setTitle('Согласны?Узнали?')
        .setImage('https://cdn.discordapp.com/attachments/545320004858413116/671295860243431431/image0.png')
        .setColor(0x225d7f)
        message.channel.send(embed)
    };
    if(message.content === 'я сосу хуи'){
        message.channel.send('Нет , я!')
    };
    if (message.content === '!avatar') {
        const embed = new Discord.RichEmbed()
        /**
         * Отображаеться в верхней части под .setAuthor()
         * .setURL() Ставит ссылку для вашего заголовка
         */
        .setTitle('Avatar of '+message.author.username)
        .setImage(message.author.avatarURL)
        .setColor(0x00ff00)
        message.channel.send(embed)
    };
    if (message.content === '!админы!') {
        message.channel.send('Хули зовёшь их?')
    };
    if (message.content === '_ава') {
        message.channel.send(message.author.avatarURL)
    };
    if (message.content === '_ава_') {
        message.channel.send(message.author.avatar)
    };
    if (message.content === '/gamemode creative') {
        message.channel.send(`Режим игры ` +message.author.username+ ` был изменён на Творческий.`)
    };
    if (message.content === '/gamemode survival') {
        message.channel.send(`Режим игры ` +message.author.username+ ` был изменён на Выживание.`)
    };
    if (message.content === '/gamemode spectator') {
        message.channel.send(`Режим игры ` +message.author.username+ ` был изменён на Наблюдение.`)
    };
    if (message.content === '/gamemode adventure') {
        message.channel.send(`Режим игры ` +message.author.username+ ` был изменён на Приключения.`)
    };
    var item = "КАК СДЕЛАТЬ?";
    if (message.content === '/give '+item) {
        message.channel.send(message.author.username+` получил `+item)
    };
    // Create an event listener for new guild members
    client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'краш-дс');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Добро пожаловать, ${member}`);
  }
  
  
  )
});
fs.readdir('./commands', (err, files) => { // чтение файлов в папке commands
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js') // файлы не имеющие расширение .js игнорируются
    if (jsfile.length <= 0) return console.log('Команды не найдены!') // если нет ни одного файла с расширением .js

    console.log(`Loaded ${jsfile.length} commands`)
    jsfile.forEach((f, i) => { // добавляем каждый файл в коллекцию команд
        let props = require(`./commands/${f}`)
        bot.commands.set(props.help.name, props)
    })
})

bot.on('message', async message => {
    let prefix = config.prefix
    let messageArray = message.content.split(' ') // разделение пробелами
    let command = messageArray[0] // команда после префикса
    let args = messageArray.slice(1) // аргументы после команды

    let command_file = bot.commands.get(command.slice(prefix.length)) // получение команды из коллекции
    if (command_file) command_file.run(bot, message, args)

    await exp(message.author)
})
bot.login(config.token);
bot.on(`ready`, () => {
    console.log(`${bot.user.username} online , если шо node main.js врубает его. вырубает комманда которая вписана в botoffline`);
    bot.user.setPresence({status: `online`});
    bot.user.setStatus({status:"lalala"})
});