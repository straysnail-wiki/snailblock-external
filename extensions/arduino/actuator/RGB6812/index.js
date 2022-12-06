const rgb6812 = formatMessage => ({
    name: formatMessage({
        id: 'rgb6812',
        default: 'NeoPixel RGB',
        description: 'NeoPixel RGB'
    }),
    extensionId: 'rgb6812',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/rgb6812.png`,
    description: formatMessage({
        id: 'rgb6812.description',
        default: 'NeoPixel driver',
        description: 'Description of rgb6812'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    library: 'lib',
    msg: 'msg.js',
    tags: ['actuator'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = rgb6812;
