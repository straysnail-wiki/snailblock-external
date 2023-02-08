const unoPlus = formatMessage => ({
    name: 'Arduino Uno',
    extensionId: 'unoPlus',
    version: '1.0.0',
    supportDevice: ['unoPlus_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'unoPlus.description',
        default: 'Uno Plus',
        description: 'Description of Arduino UNO'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.straysnail.com'
});

module.exports = unoPlus;
