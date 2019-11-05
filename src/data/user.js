const users = [
  {
    name: 'Ismail',
    id: 1,
    html: {
      project: 20,
      homework: 10
    },
    css: {
      project: 25,
      homework: 15
    },

    get totalHtml() {
      return this.html.project + this.html.homework;
    },
    get totalCss() {
      return this.css.project + this.css.homework;
    }

    // total : object.project + object.homework
  },

  {
    name: 'Abubakr',
    id: 2,
    html: {
      project: 20,
      homework: 10
    },
    css: {
      project: 20,
      homework: 10
    },
    get totalHtml() {
      return this.html.project + this.html.homework;
    },
    get totalCss() {
      return this.css.project + this.css.homework;
    }
  },
  {
    name: 'Adeeb',
    id: 3,
    html: {
      project: 20,
      homework: 10
    },
    css: {
      project: 20,
      homework: 10
    },
    get totalHtml() {
      return this.html.project + this.html.homework;
    },
    get totalCss() {
      return this.css.project + this.css.homework;
    }
  },
  {
    name: 'Zeeshan',
    id: 4,
    html: {
      project: 20,
      homework: 10
    },
    css: {
      project: 20,
      homework: 10
    },
    get totalHtml() {
      return this.html.project + this.html.homework;
    },
    get totalCss() {
      return this.css.project + this.css.homework;
    }
  }
];

export default users;
