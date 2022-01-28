# SingleSpaAngularUnmountIssue

The following diff breaks single-spa unmount https://github.com/Den-dp/single-spa-angular-unmount-issue/commit/259d59fdd9c9a1ca2f436094005299bc135ddcc4

### Reproduction:
1. clone project and run
```
npm install
npm start
```
2. open http://localhost:3000
3. navigate to spa-app
4. navigate away

### Expected:
app should be unmounted

### Actual:
styles are removed from the DOM but HTML elements are not.

![C9ecXgLNgl](https://user-images.githubusercontent.com/1770529/151608099-a18ccc4f-c2f2-4c04-b348-8727dfc7a8a7.gif)
