const apiPoint = "https://myapi.wardahhh.my.id/index.php/";

Vue.createApp({
    data() {
        return {
            users: [],
            portofolio: [],
            articles: {},
            markdown: null
        }
    },
    methods: {
        getArticleData() {
            axios
                .get(
                    apiPoint+"artikels"
                )
                .then((res) => {
                    this.articles = res.data;
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getUserData() {
            axios
                .get(
                    apiPoint+"users"
                )
                .then((res) => {
                    this.users = res.data;
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getPortofolioData() {
            axios
                .get(
                    apiPoint+"pors"
                )
                .then((res) => {
                    this.portofolio = res.data;
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getMarkdownFile() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const fileName = urlParams.get('markdown');
            var converter = new showdown.Converter();
            console.log(fileName)
            axios
                .get(
                    "https://raw.githubusercontent.com/wardahasifa/tekweb2022/main/" + fileName
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);
                    this.markdown = html;
                    console.log(html)
                })
                .catch((error) => {
                    console.log(error);
                  });
        }
    },
    beforeMount() {
        this.getArticleData(),
        this.getUserData(),
        this.getPortofolioData(),
        this.getMarkdownFile()
    },
}).mount("#app");