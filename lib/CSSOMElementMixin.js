import { ElementAssembler } from 'dommodule/lib/ElementAssembler'

export class CSSOMElementMixin extends ElementAssembler {
    set scrollTop(scrollTop) {
        this.node.scrollTop = scrollTop
    }

    get scrollTop() {
        return this.node.scrollTop
    }
}
