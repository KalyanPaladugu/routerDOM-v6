### React Routing-carash-course

+ Based upon the location we can load the UI in the browser but every time it will load entire document (Not a singla page application)
+ Content will be load at a time but based upon the URL it will load respective component(SPA)

+ Install `react-router-dom` for Routing

+ `BrowserRouter` make the get request based upon the URL .It can be used as serverside applications

```
localhost:3000/about/
```
+ `HashRouter` make the get request before `#` in the url. It can be used as client side

```
localhost:3000/about#/
```
+ In Switch case default it will load content in `Route` element.Otherwise it will load the content based upon the precedence order of Route

+ In `react-router-dom` version5 `Switch` and `component={componentname} ` in the `Route` can be applied.
+ But in React Version6 int he place of Switch try to use `Routes` and in the place of component try to use `element={<componentname />}`
+ The order of rendering UI in the Route is 
    `children in the route --> component --> render ={()=> <p>paragraph1</p>}`

+ In v6 no need to use `exact` and  `strict` in Route
+ To highlight spectific page we can use `NavLink` in the place of `Link`
+ To activate specific selected option in the navlink in v6 try to use below code
```
<NavLink className='nav-link ' to="/about" className={({ isActive }) => (isActive ? 'btn btn-primary' : 'inactive')} >About</NavLink>
```
+ In version5 we will use `activeClassName`

+ Navigation
    - To navigate from one URL to another in v6 use the below syntax
```
let Navigate=useNavigate();
    useEffect(() => {
        if (window.location.pathname === '/dashboard') {
          Navigate('/login')
        }
      }, [])
```