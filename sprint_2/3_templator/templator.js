
class Templator {

    constructor(template) {
        this._template = template;
    }

    compile(ctx) {
        return this._compileTemplate(this._template, ctx);
    }

    get(obj, path, defaultValue) {
        const keys = path.split('.')
        let result = obj;
        for (let key of keys) {
            result = result[key]
            if (result === undefined) {
                return defaultValue
            }
        }
        return result ?? defaultValue
    }

    _compileTemplate(template, context) {
        const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
        let tmpl = template;
        let key = null;

        while ((key = TEMPLATE_REGEXP.exec(tmpl))) {
            if (key[1]) {
                const templateValue = key[1].trim();
                const data = this.get(context, templateValue);
                if (typeof data === "function") {
                    window[templateValue] = data;
                    tmpl = tmpl.replace(
                        new RegExp(key[0], "gi"),
                        `window.${key[1].trim()}()`
                    );
                }else if(Array.isArray(data)){
                    const arrayItemTempl = this.get(context, `${templateValue}Templ`)
                    const arrayData = data.map(item => new Templator(arrayItemTempl).compile({ name: item })).join("\n\t")
                    tmpl = tmpl.replace(new RegExp(key[0], "gi"), arrayData);
                } else{
                    tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
                }
            }
        }

        return tmpl;
    }
}

export default Templator

