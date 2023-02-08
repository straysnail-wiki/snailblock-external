const lcd = formatMessage => ({
    name: formatMessage({
        id: 'lcd.name',
        default: '1602 LCD'
    }),
    extensionId: 'lcd',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'StraySnail',
    iconURL: `asset/lcd.png`,
    description: formatMessage({
        id: 'lcd.description',
        default: '1602 liquid crystal display which based on I2C bus.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
    helpLink: 'https://straysnail.com/'
});

module.exports = lcd;
