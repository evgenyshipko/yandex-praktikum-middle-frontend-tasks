import EventBus from "./event-bus.js";

class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update"
    };

    _element = null;
    _meta = null;

    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName = "div", props = {}) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus) {
        console.log('_registerEvents')
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    _createResources() {
        console.log('_createResources')
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        console.log('init')
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount() {
        console.log('_componentDidMount')
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidMount(oldProps) {}

    _componentDidUpdate(oldProps, newProps) {
        console.log('_componentDidUpdate')
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response){
            this.props = Object.assign(oldProps, newProps);
            console.log('assigning props', this.props)
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps) {
        return oldProps !== newProps
    }

    setProps = nextProps => {
        console.log('setProps')
        if (!nextProps) {
            return;
        }
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props,  nextProps)
    };

    get element() {
        return this._element;
    }

    _render() {
        console.log('_render')
        const block = this.render();
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду
        this._element.innerHTML = block;
    }

    // Может переопределять пользователь, необязательно трогать
    render() {}

    getContent() {
        console.log('getContent')
        return this.element;
    }

    _makePropsProxy(props) {
        console.log('_makePropsProxy')
        const self = this;
        const proxyProps = new Proxy(props, {
            set(target, prop, val) {
                self.eventBus().emit(Block.EVENTS.FLOW_RENDER);
                target[prop] = val;
                return true
            },
            deleteProperty(target, prop) {
                throw new Error('Нет доступа');
            }
        });
        return proxyProps;
    }

    _createDocumentElement(tagName) {
        console.log('_createDocumentElement')
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }
}

export default Block
