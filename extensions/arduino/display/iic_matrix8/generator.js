/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.matrix_iic_init = function (block) {
        Blockly.Arduino.definitions_[`ks_matrix`] = '#include <Matrix.h>\n'+
        'Matrix myMatrix(A4,A5);\nuint8_t  LEDArray[8];\n';
        Blockly.Arduino.setups_['matrix_pin_setup'] = 'myMatrix.begin(112);\n  myMatrix.clear();\n';
        return '';
    };

    Blockly.Arduino.matrix_iic_face = function (block) {
        Blockly.Arduino.definitions_[`1matrix_face`] = 
        'uint8_t matrix_smile[8]={0x00,0x18,0x24,0x00,0x00,0xa5,0xa5,0x42};\n'+
        'uint8_t matrix_front[8]={0x18,0x18,0x18,0x18,0xdb,0x7e,0x3c,0x18};\n'+
        'uint8_t matrix_back[8]={0x18,0x3c,0x7e,0xdb,0x18,0x18,0x18,0x18};\n'+
        'uint8_t matrix_left[8]={0x08,0x0c,0x06,0xff,0xff,0x06,0x0c,0x08};\n'+
        'uint8_t matrix_right[8]={0x10,0x30,0x60,0xff,0xff,0x60,0x30,0x10};\n'+
        'uint8_t matrix_stop[8]={0x00,0x7e,0x42,0x5a,0x5a,0x42,0x7e,0x00};\n'+
        'uint8_t matrix_tsundere[8]={0x00,0x00,0x04,0x28,0x10,0x00,0xe7,0x00};\n'+
        'uint8_t matrix_squinting[8]={0x00,0x00,0x3c,0x81,0x42,0x24,0x42,0x81};\n'+
        'uint8_t matrix_despise1[8]={0x00,0x00,0x3c,0x00,0x00,0xee,0x88,0x00};\n'+
        'uint8_t matrix_speechless[8]={0x00,0x3c,0x24,0x3c,0x00,0x00,0xe7,0x00};\n'+
        'uint8_t matrix_heart[8]={0x18,0x3c,0x7e,0xff,0xff,0xff,0xe7,0x42};\n'+
        'uint8_t matrix_clear[8]={0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n';

        Blockly.Arduino.definitions_[`2matrix_display`] = 'int matrix_display(uint8_t led_array[8])'+
        '{\n'+
        '  for(int i=0; i<8; i++)\n'+
        '  {\n'+
        '    LEDArray[i]=led_array[i];\n'+
        '    for(int j=7; j>=0; j--)\n'+
        '    {\n'+
        '      if((LEDArray[i]&0x01)>0)\n'+
        '      myMatrix.drawPixel(j, i,1);\n'+
        '      LEDArray[i] = LEDArray[i]>>1;\n'+
        '    }\n'+
        '  }\n'+
        '}\n';

        const matrix_face = this.getFieldValue('face');

        return 'matrix_display('+matrix_face+');\n';
    };

    Blockly.Arduino.matrix_iic_piexl = function (block) {
        const xVal = Blockly.Arduino.valueToCode(block, 'xVal', Blockly.Arduino.ORDER_ATOMIC);
        const yVal = Blockly.Arduino.valueToCode(block, 'yVal', Blockly.Arduino.ORDER_ATOMIC);
        const matrix_state = this.getFieldValue('state');

        return 'myMatrix.drawPixel('+xVal+'-0,'+yVal+'-0,'+matrix_state+');\n';
    };

    Blockly.Arduino.matrix_iic_refresh = function (block) {
        return 'myMatrix.write();\n';
    };

    Blockly.Arduino.matrix_iic_clear = function (block) {
        return 'myMatrix.clear();\n  myMatrix.write();\n';
    };

    return Blockly;
}

exports = addGenerator;
