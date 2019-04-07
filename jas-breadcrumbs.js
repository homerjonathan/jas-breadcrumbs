/**
Element that does a simple Breadcrumbs Menu
##### Example
    <jas-breadcrumbs></jas-breadcrumbs>
@element jas-breadcrumbs
@status alpha
@demo demo/index.html
*/

import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {GestureEventListeners} from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';

class JasBreadcrumbs extends GestureEventListeners(PolymerElement) {
  static get template() {
    return Polymer.html`
        <style>
            :host {
                display: block;
                padding: 10px 10px 0 8px;
                margin: 0;
                /*font-family: 'Roboto', 'Noto', sans-serif;*/
            }

            .breadcrumb {
                text-decoration: none;
                -webkit-tap-highlight-color: transparent;
                background-color: transparent;
                line-height: 34px;
                font-size: 18px;
                color: var(--breadcrumb-color1,rgb(67, 110, 144));
                opacity: 0.8;
            }
            .breadcrumb:hover {
                cursor: pointer;
                font-size: 18px;
                color: var(--breadcrumb-highlight,rgb(27, 53, 71));
                opacity: 0.98;
            }
            .breadcrumb:last-child {
                color: var(--breadcrumb-color1,rgb(67, 110, 144));
                opacity: 1.0;
            }
            .breadcrumb-arrow {
                color: var(--breadcrumb-color1,rgb(67, 110, 144));    
                margin: -2px 6px 0 6px;
            }
            .breadcrumb-arrow:first-child {
                display: none;
            }
            .helpIcon {
                color: var(--app-primary-color,#436E90);
                float: right;
                margin-right: 10px;
            }
            .breadcrumb_layout {
                height: 42px;
                margin-left: 20px;
                overflow: hidden;
            }
        </style>
        <iron-iconset-svg name="breadcrumbs_icons" size="24">
            <svg><defs>
                <g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
                <g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
            </defs></svg>
        </iron-iconset-svg>
        <div class="flex layout breadcrumb_layout">
            <template id="resultList" is="dom-repeat" items="{{menu}}" as="m">
                <iron-icon class="breadcrumb-arrow" icon="breadcrumbs_icons:chevron-right"></iron-icon>
                <a on-tap="_selectPage" id="{{m.id}}" class="breadcrumb">{{m.text}}</a>
            </template>
            <paper-icon-button on-tap="_selectHelp" class="helpIcon" icon="breadcrumbs_icons:help"></paper-icon-button>
        </div>
`;
  }

  static get is() { return 'jas-breadcrumbs'; }
  static get properties()      {
      return {
          menu: {
              type: Object,
              notifies: true
          },
          selected: {
              type: String,
              notifies: true,
              reflectToAttribute: true
          }
      }
  }
  constructor() {
      super();
      JasBreadcrumbs.hook = this;
  }
  setMenu(newMenu) {
      this.menu = newMenu;
  }
  _selectPage(e) {
      var model = e.model;
      if (model.m != undefined) {
          this.selected = model.m.id;
          this.fire('page_change', {page:  model.m.id});
      }
  }
  _selectHelp() {
      this.selected = "page_help";
      this.fire('page_help',{ page: "help" });
  }
  fire(name,detail) {
      document.dispatchEvent(new CustomEvent(name, {detail: detail}));
  }
}
customElements.define(JasBreadcrumbs.is, JasBreadcrumbs);
