import css from '../css/style.css';

// TODO:
// MAY NEED TO REFINE COLOR PALETTE VARIABLE
// ALIGN THOSE TO THE ONE USED BY FIGMA
// MAKE CODE MORE COMPACT (CASE COMPACTED)
// BOTTOM BORDER ON PAGE ACCORDIN PANEL


// Figma Panel Code HERE?


export function toggleDarkUI() {
    const palette = {
        bgLightest: '#676C70',
        bgLight: '#333536',
        bgBase: '#262829',
        bgDark: '#1B1C1C',
        bgActive: '#30c2ff',
        txtLabelSection: '#EBF0F5',
        txtLabel: '#C1C5C9',
        txtDisabled: '#525558',
        txtSymbol: '#907cff',
        stActivePressed: '#25b5f1'
    }

    if (document.getElementById('f-ui') === null) {
        let style = document.createElement('style')
        let cssNode = document.createTextNode(css)

        style.id = 'f-ui'
        style.appendChild(cssNode)

        setTheme()

        document.head.appendChild(style)
    } else {
        if (confirm('Figma needs a refresh in order to restore the default theme. Continue?')) {
            location.reload()
        }
    }

    function setTheme() {
        let css = ''
        const cssStack = document.styleSheets

        Object.keys(cssStack).forEach(key => {
            let cssName = cssStack[key].href
        
            if (cssName && cssName.includes('figma_app')) {
                css = cssStack[key]
            }
        }) 

        const rules = css.cssRules

        for (let item of rules) {
            if (item.style != undefined) {
                changeTextColor(item)
                changeBackground(item)
                changeFill(item)
                changeStroke(item)
                changeBorderBottomColor(item)
                changeBorderRightColor(item)
                changeBorderLeftColor(item)
                changeBorderTopColor(item)
            }
        }
    }

    function changeTextColor(item) {
        if (item.style.color != "") {
            switch(item.style.color) {
                case 'rgb(0, 0, 0)':
                    item.style.color = palette.txtLabelSection
                    break
                case 'rgba(0, 0, 0, 0.5)':
                    item.style.color = palette.bgLightest
                    break
                case 'rgb(5, 5, 5)':
                    item.style.color = palette.txtLabelSection
                    break
                case 'rgb(44, 44, 44)':
                    item.style.color = palette.txtLabel
                    break
                case 'rgb(68, 68, 68)':
                    item.style.color = palette.txtLabel
                    break
                case 'rgba(68, 68, 68, 0.3)':
                    item.style.color = palette.txtDisabled
                    break
                case 'rgb(170, 170, 170)':
                    item.style.color = palette.bgLightest
                    break
                case 'rgb(212, 212, 212)':
                    item.style.color = palette.bgLightest
                    break
            }
        }
    }

    function changeBackground(item) {
        if (item.style.backgroundColor != "") {
            switch(item.style.backgroundColor) {
                case 'rgb(44, 44, 44)':
                    item.style.backgroundColor = palette.bgLight
                    break
                case 'rgb(212, 212, 212)':
                    item.style.backgroundColor = palette.bgLight
                    break
                case 'rgb(229, 229, 229)':
                    item.style.backgroundColor = palette.bgDark
                    break
                case 'rgb(239, 239, 239)':
                    item.style.backgroundColor = palette.bgLight
                    break
                case 'rgb(248, 248, 248)':
                    item.style.backgroundColor = palette.bgBase
                    break
                case 'rgb(252, 252, 252)':
                    item.style.backgroundColor = palette.bgBase
                    break
                case 'rgb(255, 255, 255)':
                case '#FFF':
                case 'rgba(255, 255, 255, 0.95)':
                case 'rgba(255, 255, 255, 0.953)':
                    item.style.backgroundColor = palette.bgBase
                    break
            }
        } 
    }


    function changeFill(item) {
        if (item.style.fill != "") {
            switch(item.style.fill) {
                case 'rgb(0, 0, 0)':
                    item.style.fill = palette.txtLabelSection
                break
                case 'rgb(5, 5, 5)':
                    item.style.fill = palette.txtLabelSection
                break
                case 'rgb(44, 44, 44)':
                    item.style.fill = palette.txtLabelSection
                    break
                case 'rgb(68, 68, 68)':
                    item.style.fill = palette.txtLabelSection
                    break
                case 'hsla(0,0%,67%,0.3)':
                    item.style.fill = palette.txtDisabled
                    break
                case 'rgb(170, 170, 170)':
                    item.style.fill = palette.bgLightest
                    break
                case 'rgb(212, 212, 212)':
                    item.style.fill = palette.bgLightest
                    break
                case 'rgb(229, 229, 229)':
                    item.style.fill = palette.bgDark
                    break
                case 'rgb(239, 239, 239)':
                    item.style.fill = palette.bgLight
                    break
                case 'rgb(252, 252, 252)':
                    item.style.fill = palette.bgBase
                    break
            }
        } 
    }
    
    function changeStroke(item) {
        if (item.style.stroke != "") {
            switch(item.style.stroke) {
                case 'rgb(170, 170, 170)':
                    item.style.stroke = palette.bgLightest
                    break
            }
        }
    }

    function changeBorderBottomColor(item) {
        if (item.style.borderBottomColor != "") {
            switch(item.style.borderBottomColor) {
                case 'rgb(239, 239, 239)':
                    item.style.borderBottomColor = palette.bgDark
                    break
                case 'rgb(212, 212, 212)':
                    item.style.borderBottomColor = palette.bgDark
                    break
                case 'rgb(217, 217, 217)':
                    item.style.borderBottomColor = palette.bgDark
                    break
                case 'rgb(229, 229, 229)':
                    item.style.borderBottomColor = palette.bgDark
                    break
            }
        }
    }

    function changeBorderRightColor(item) {
        if (item.style.borderRightColor != "") {
            switch(item.style.borderRightColor) {
                case 'rgb(239, 239, 239)':
                    item.style.borderRightColor = palette.bgDark
                    break
                case 'rgb(212, 212, 212)':
                    item.style.borderRightColor = palette.bgDark
                    break
                case 'rgb(217, 217, 217)':
                    item.style.borderRightColor = palette.bgDark
                    break
                case 'rgb(229, 229, 229)':
                    item.style.borderRightColor = palette.bgDark
                    break
            }
        }
    }
    
    function changeBorderLeftColor(item) {
        if (item.style.borderLeftColor != "") {
            switch(item.style.borderLeftColor) {
                case 'rgb(239, 239, 239)':
                    item.style.borderLeftColor = palette.bgDark
                    break
                case 'rgb(212, 212, 212)':
                    item.style.borderLeftColor = palette.bgDark
                    break
                case 'rgb(217, 217, 217)':
                    item.style.borderLeftColor = palette.bgDark
                    break
                case 'rgb(229, 229, 229)':
                    item.style.borderLeftColor = palette.bgDark
                    break
            }
        }
    }

    function changeBorderTopColor(item) {
        if (item.style.borderTopColor != "") {
            switch(item.style.borderTopColor) {
                case 'rgb(212, 212, 212)':
                    item.style.borderTopColor = palette.bgDark
                    break
                case 'rgb(217, 217, 217)':
                    item.style.borderTopColor = palette.bgDark
                    break
                case 'rgb(229, 229, 229)':
                    item.style.borderTopColor = palette.bgDark
                    break
                case 'rgb(239, 239, 239)':
                    item.style.borderTopColor = palette.bgDark
                    break
                case 'rgb(252, 252, 252)':
                    item.style.borderTopColor = palette.bgBase
                    break
            }
        }
    }
}


// color
// background
// background-color
// border
// border-color
// border-left
// border-top
// border-right
// border-bottom

// stroke
// fill