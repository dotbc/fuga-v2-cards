import Component from '@glimmer/component';

const HEADER_FIELDS = {
  "title": "title",
  "description": "writers"
};

const VIEW_FIELDS = [
  "iswc",
  "truncated-verifi-id"
];

export default class EmbeddedLayout extends Component {
  header = HEADER_FIELDS;
  viewFields = VIEW_FIELDS;

  get headerFields() {
    if (!this.args.card || !this.args.card.attributes || !this.header) { return null; }
    const fieldNameMap = this.header;
    const fields = this.args.card.attributes;

    return {
      title: fields[fieldNameMap.title],
      description: fields[fieldNameMap.description],
      image: fields[fieldNameMap.image]
    }
  }

  get detailFields() {
    if (!this.viewFields || !this.args.fields) { return null; }
    const fieldNames = this.viewFields;
    let fields = [];

    for (let field of fieldNames) {
      if (this.args.card.attributes[field]) {
        fields = [...fields, this.args.fields.find(f => f.name === field)];
      }
    }

    return fields;
  }
}