import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import icon from './eye-open.svg'

export default class PreviewPlugin extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('preview', locale => {
      const view = new ButtonView( locale );

      view.set({
        label: 'Preview',
        icon,
        tooltip: true
      })

      view.on('execute', () => {
        const event = new CustomEvent('request-preview')
        editor.ui.view.element.dispatchEvent(event)
      });

      return view
    });
  }
}