/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const rc522IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNzguMSA3OC4yIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3OC4xIDc4LjI7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJSRklELnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjItMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSkiPjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGExOSI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICBpZD0iZGVmczE3IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzE1IgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjMuOTE5ODMxMiIKICAgaW5rc2NhcGU6Y3g9IjM5LjA0OTk5OSIKICAgaW5rc2NhcGU6Y3k9IjI4LjI3NjQ2OSIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIgogICBpbmtzY2FwZTpkb2N1bWVudC1yb3RhdGlvbj0iMCIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMDBBMEU5O30KPC9zdHlsZT4KPGcKICAgaWQ9ImcxMiIKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCI+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNzguMSw0NGMwLTcuNC0wLjYtMTAuNy0zLjQtMTcuMkM2OS41LDE0LjksNTUuOCw2LjQsNDIuMSw2LjRjMCwxMS42LTEuMSw3LjQsNS41LDguNyAgIGM5LjMsMS45LDE1LjUsNy40LDE5LjcsMTUuNWM1LDkuOSwyLjYsMjMtNSwzMC44Yy04LjQsOC40LTIxLjUsMTEuMS0zMi4xLDUuOGMtNi4yLTMtMTAuNy04LjItMTMuNS0xNC41ICAgQzExLjQsNDEsMjAuMSw0MS45LDYuNiw0MS45YzAsNi40LDAuOSwxMC44LDMuNiwxNi4zYzUuOCwxMS43LDE4LjUsMjAsMzIsMjBjOC44LDAsMTguOC00LDI0LjktMTBjMy4yLTMuMiw1LjItNS44LDcuNC0xMC4xICAgQzc2LjIsNTQuNiw3OC4xLDQ5LjEsNzguMSw0NCIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTM1LjUsMjlWMi44YzAtMS43LTEuMS0yLjgtMi44LTIuOEgzLjFDMSwwLDAsMS43LDAsMy45djI5LjdjMCwyLjEsMSwzLjksMy4xLDMuOWgyNC4xICAgQzI4LDM3LjQsMzUuNSwzMCwzNS41LDI5IE0yNCwyNC44SDExLjhWMTIuNkgyNFYyNC44eiIKICAgaWQ9InBhdGg2IgogICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTYyLjEsNDNjMC0xMS41LTguMi0yMC42LTE5LjktMjAuNmMwLDExLjQtMC42LDcuMyw0LjEsOC44QzU0LDMzLjgsNTYuNiw0My44LDUxLjEsNTAgICBjLTUuMiw1LjktMTcuOSw1LjYtMjAuMi02LjJjLTAuNS0yLjUsMC42LTEuOS04LjItMS45YzAsOC41LDQuNSwxNS4zLDEyLjEsMTguNmM1LjMsMi4yLDEwLjUsMS45LDE1LjctMC4zICAgYzEuMS0wLjUsMi4yLTEuMiwzLjEtMS43QzU4LDU1LjQsNjIuMSw0OS42LDYyLjEsNDMiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik00Ni43LDQyLjNjMC01LjUtOC43LTYtOC43LDBDMzcuOSw0OC4xLDQ2LjcsNDcuNiw0Ni43LDQyLjMiCiAgIGlkPSJwYXRoMTAiCiAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+CjwvZz4KPC9zdmc+Cg==';
    
    return `
<category name="%{BKY_RC522_CATEGORY}" id="RC522_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${rc522IconUrl}">
    <block type="rc522_init" id="rc522_init">

    </block>

    <block type="rc522_read" id="rc522_read">

    </block>
</category>`;
}

exports = addToolbox;
