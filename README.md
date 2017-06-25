# \<jas-breadcrumbs\>

Simple Breadcrumbs Menu with Help Icon at the right side of the Page.

## Using the Component

Create a shared "app".


```
  var app = {};
```


The element creates a app.breadcrumb link which is itself to make it easy to find.

```
 var breadCrumbMenu = [];
          breadCrumbMenu.push({text: "Main", id: "main"});
          breadCrumbMenu.push({text: "Second", id: "second"});
          breadCrumbMenu.push({text: "Third", id: "third"});
          breadcrumbs.setMenu(breadCrumbMenu);

```

This will create a menu.  When the item is select the 'id' above is set to the attribute and also a message is fired.  You can use your most prefered method of processing the event.

Its use is show below

```

  <link rel="import" href="../bower_components/jas-breadcrumbs/jas-breadcrumbs.html">
  <jas-breadcrumbs id="breadcrumbs" selected="{{page}}"></jasbreadcrumbs>
  
```

Trap this and you can use it to change the page.

When the help button is pressed it sets the attribute to "help_page" and dispatches an event message of "page_help"

```
    document.addEventListener("page_change", function(e) {
        console.log("Event: Page Change Requested - ", e.detail.page);
        // Do Your Page Change Stuff Here
    });
    document.addEventListener("page_help", function(e) {
        console.log("Help Page Requested");
        // Do Your Help Page Stuff Here
    });
````

