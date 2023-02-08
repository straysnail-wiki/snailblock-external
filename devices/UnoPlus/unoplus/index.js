const unoPlus = formatMessage => ({
    name: 'Arduino Uno',
    deviceId: 'unoPlus_arduinoUno',
    manufactor: 'StraySnail',
    leanMore: 'https://www.straysnail.com',
    iconURL: 'asset/unoplus.png',
    description: formatMessage({
        id: 'unoPlus.description',
        default: 'Uno Plus',
        description: 'Description for the Uno Plus device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/arduinoUno-illustration.svg',
    connectionSmallIconURL: 'asset/arduinoUno-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['unoPlus'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://www.straysnail.com'
});

module.exports = unoPlus;
