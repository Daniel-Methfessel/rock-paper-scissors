import { I18n } from 'vue-i18n'

declare module "*.vue" {
    import { type DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
         $t: (key: string, ...params: any[]) => string;
        $i18n: I18n;
    }
}