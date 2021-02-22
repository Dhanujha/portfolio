import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <meta
        name="description"
        content="A India based Developer name Dhanujha's Portfolio who offers services like web development, designing and maintaining websites."
      />
      <meta name="author" content="Dhanujha R" />
      <meta
        name="keywords"
        content="web developer, web designer, full stack developer, portfolio, dhanujha, open for work, India based, Chennai based, Tamilnadu, ui developer portfolio, backend developer portfolio, chennai Institute of Technology, cit, rajapalayam, software engineer portfolio website, portfolio website examples, programmer portfolio website, javascript developer portfolio, php developer portfolio, reactjs developer portfolio, expressjs, nodejs developer portfolio, web developer website examples, hire me, a web developer portfolio, developer resume, view resume, web developer for hire india, web developer for hire, freelance web developer, web developer online, web developer hire online, web developer recommendations"
      ></meta>
      <link rel="stylesheet" href="css/base.css" />
      <link rel="stylesheet" href="css/main.css" />
      <link rel="stylesheet" href="css/vendor.css"></link>
      {/* <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/font-awesome.css" />
      <link rel="stylesheet" href="css/font-awesome.min.css" />
      <link rel="stylesheet" href="css/font-awesome-shime.css" />
      <link rel="stylesheet" href="css/font-awesome-all.css" />
      <link rel="stylesheet" href="css/style.css" /> */}
      <script src="js/modernizr.js"></script>
      <script src="js/pace.min.js"></script>
      <script src="js/jquery-2.1.3.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/main.js"></script>

      <link rel="icon" type="image/ico" href="favicon.ico" />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
