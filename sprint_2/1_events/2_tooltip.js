(function () {

    class Tooltip {
        constructor() {
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);

            this.onHide = this.onHide.bind(this);

        }

        get name() {
            return 'tooltip';
        }

        get indent() {
            return 5;
        }

        delegate(eventName, element, cssSelector, callback) {
            console.log('delegate',eventName)
            const fn = event => {
                if (!event.target.matches(cssSelector)) {
                    return;
                }
                callback(event);
            };


            element.addEventListener(eventName, fn);
            //this.listeners.push({ fn, element, eventName });

            return this;
        }

        onShow = (event) => {
            const toolTipText = event.target.getAttribute('data-tooltip')
            this.el.textContent = toolTipText
            this.el.classList.add('tooltip_active')
            console.log(this.el.getBoundingClientRect())

            if (event.target.className === 'left_top'){
                this.el.style.position = 'fixed'
                this.el.style.marginTop = "0px"
                this.el.style.left = 0
            }else if (event.target.className === 'left_bottom'){
                this.el.style.position = 'fixed'
                this.el.style.marginTop = "170px"
                this.el.style.marginBottom = "0px"
                this.el.style.left = 0
            }
        }

        onHide() {
            this.el.classList.remove('tooltip_active')
        }

        attach(root) {
            this
                .delegate('mouseover', root, '[data-tooltip]', this.onShow)
                .delegate('mouseout', root, '[data-tooltip]', this.onHide);
        }

        detach() {
            //Реализуйте этот метод
            document.body.removeEventListener('mouseover')
            document.body.removeEventListener('mouseout')
        }
    }

    window.Tooltip = Tooltip;
})();

const tooltip = new Tooltip();
tooltip.attach(document.body);
