export default class EffectScriptConfig extends FormApplication {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            id: "effect-script-config",
            template: "systems/age-of-sigmar-soulbound/template/apps/effect-script.html",
            height: 400,
            width: 500,
            title: game.i18n.localize("HEADER.EFFECT_SCRIPT_CONFIG"),
            editable : game.user.isGM,
            resizable: true

        })
    }

    getData() {
        let data = super.getData()
        data.script = this.object.effect.changeConditionals[this.object.index]?.script
        data.description = this.object.effect.changeConditionals[this.object.index]?.description
        return data
    }

    _updateObject(event, formData) {
        let script = formData.script
        let description = formData.description;

        return this.object.effect.update({[`flags.age-of-sigmar-soulbound.changeCondition.${this.object.index}`] : {script, description}})
    }
}