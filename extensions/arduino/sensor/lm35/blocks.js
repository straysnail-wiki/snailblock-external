/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const lm35IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMzMuNzAwMDAxIDQ0Ljc5OTk5OCIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iTE0zNea4qeW6pi5zdmciCiAgIHdpZHRoPSIzMy43MDAwMDEiCiAgIGhlaWdodD0iNDQuNzk5OTk5IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTM5Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMzciPgoJCgkKCQoJCgkKCQoJCgkKCQoJCgkKCQoJCgkKPC9kZWZzPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzM1IgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjI0Ljk1NTM1OCIKICAgaW5rc2NhcGU6Y3g9IjE2Ljg1IgogICBpbmtzY2FwZTpjeT0iNy45NzQyNDA0IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiCiAgIGlua3NjYXBlOmRvY3VtZW50LXJvdGF0aW9uPSIwIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsOiMxM0FFNjc7fQo8L3N0eWxlPgo8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDIwLjksMzYuNCBjIDAsLTIuMSAtMS43LC0zLjkgLTMuOSwtMy45IC0yLjEsMCAtMy45LDEuNyAtMy45LDMuOSAwLDIuMSAxLjcsMy45IDMuOSwzLjkgMi4xLDAgMy45LC0xLjggMy45LC0zLjkgbSAtNi40LDAgYyAwLC0xLjQgMS4xLC0yLjUgMi41LC0yLjUgMS40LDAgMi41LDEuMSAyLjUsMi41IDAsMS40IC0xLjEsMi41IC0yLjUsMi41IC0xLjQsMCAtMi41LC0xLjIgLTIuNSwtMi41IHoiCiAgIGlkPSJwYXRoMTIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAxNy43LDMzLjIgdiAtMTMgYyAwLC0wLjQgLTAuMywtMC43IC0wLjcsLTAuNyAtMC40LDAgLTAuNywwLjMgLTAuNywwLjcgdiAxMyBjIDAsMC40IDAuMywwLjcgMC43LDAuNyAwLjQsMCAwLjcsLTAuMyAwLjcsLTAuNyIKICAgaWQ9InBhdGgxNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDksMzYuNCBjIDAsLTIuNiAxLjIsLTUgMy4xLC02LjUgViA1LjYgYyAwLC0yLjkgMi40LC01LjMgNS4zLC01LjMgMi45LDAgNS4zLDIuNCA1LjMsNS4zIFYgMzAgYyAxLjgsMS41IDMsMy44IDMsNi40IDAsNC42IC0zLjgsOC40IC04LjQsOC40IEMgMTIuOCw0NC43IDksNDEgOSwzNi40IE0gMjEuNCwyOS45IFYgNS42IGMgMCwtMi4yIC0xLjgsLTMuOSAtNCwtMy45IC0yLjIsMCAtMy45LDEuOCAtMy45LDMuOSB2IDI0LjMgbCAtMC42LDEgYyAtMS41LDEuMyAtMi41LDMuMiAtMi41LDUuNCAwLDMuOCAzLjEsNyA3LDcgMy44LDAgNywtMy4xIDcsLTcgMCwtMi4xIC0xLC00LjEgLTIuNSwtNS40IHoiCiAgIGlkPSJwYXRoMTYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAzMy43LDIuNiBWIDEuMyBDIDMzLjcsMSAzMy40LDAuNyAzMy4xLDAuNyBoIC02LjMgYyAtMC4zLDAgLTAuNiwwLjIgLTAuNiwwLjYgdiAxLjMgYyAwLDAuMyAwLjMsMC42IDAuNiwwLjYgaCA2LjMgYyAwLjMsMCAwLjYsLTAuMiAwLjYsLTAuNiIKICAgaWQ9InBhdGgxOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNIDMxLjEsNi45IFYgNS42IEMgMzEuMSw1LjMgMzAuOSw1IDMwLjUsNSBoIC0zLjcgYyAtMC4zLDAgLTAuNiwwLjIgLTAuNiwwLjYgdiAxLjMgYyAwLDAuMyAwLjIsMC42IDAuNiwwLjYgaCAzLjcgYyAwLjMsMCAwLjYsLTAuMiAwLjYsLTAuNiIKICAgaWQ9InBhdGgyMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNIDMzLjcsMTEuNiBWIDEwLjMgQyAzMy43LDEwIDMzLjQsOS43IDMzLjEsOS43IGggLTYuMyBjIC0wLjMsMCAtMC42LDAuMiAtMC42LDAuNiB2IDEuMyBjIDAsMC4zIDAuMywwLjYgMC42LDAuNiBoIDYuMyBjIDAuMywtMC4xIDAuNiwtMC4zIDAuNiwtMC42IgogICBpZD0icGF0aDIyIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0gMzEuMSwxNS45IFYgMTQuNiBDIDMxLjEsMTQuMyAzMC45LDE0IDMwLjUsMTQgaCAtMy43IGMgLTAuMywwIC0wLjYsMC4yIC0wLjYsMC42IHYgMS4zIGMgMCwwLjMgMC4yLDAuNiAwLjYsMC42IGggMy43IGMgMC4zLDAgMC42LC0wLjMgMC42LC0wLjYiCiAgIGlkPSJwYXRoMjQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAzMy43LDIwLjQgdiAtMS4zIGMgMCwtMC4zIC0wLjMsLTAuNiAtMC42LC0wLjYgaCAtNi4zIGMgLTAuMywwIC0wLjYsMC4yIC0wLjYsMC42IHYgMS4zIGMgMCwwLjMgMC4zLDAuNiAwLjYsMC42IGggNi4zIGMgMC4zLDAgMC42LC0wLjIgMC42LC0wLjYiCiAgIGlkPSJwYXRoMjYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAzMS4xLDI0LjggdiAtMS4zIGMgMCwtMC4zIC0wLjIsLTAuNiAtMC42LC0wLjYgaCAtMy43IGMgLTAuMywwIC0wLjYsMC4yIC0wLjYsMC42IHYgMS4zIGMgMCwwLjMgMC4yLDAuNiAwLjYsMC42IGggMy43IGMgMC4zLC0wLjEgMC42LC0wLjMgMC42LC0wLjYiCiAgIGlkPSJwYXRoMjgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAzMy43LDI5IHYgLTEuMyBjIDAsLTAuMyAtMC4zLC0wLjYgLTAuNiwtMC42IGggLTYuMyBjIC0wLjMsMCAtMC42LDAuMiAtMC42LDAuNiBWIDI5IGMgMCwwLjMgMC4zLDAuNiAwLjYsMC42IGggNi4zIGMgMC4zLDAgMC42LC0wLjMgMC42LC0wLjYiCiAgIGlkPSJwYXRoMzAiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cjwvc3ZnPgo=';
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.lm35_readTemperature = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LM35_READ_TEMPERATURE,
                args0: [
                    {
                        type: 'field_image',
                        src: lm35IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
