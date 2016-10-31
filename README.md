# \<jas-breadcrumbs\>

Simple Breadcrumbs Menu with Help Icon at the right side of the Page.

## Using the Component

Create a shared "app".


```
  var app = {};
```

The element creates a breadlink which is itself to make it easy to find.

```
 var breadCrumbMenu = [];
          breadCrumbMenu.push({text: "Main", id: "main"});
          breadCrumbMenu.push({text: "Second", id: "second"});
          breadCrumbMenu.push({text: "Third", id: "third"});
          breadcrumbs.setMenu(breadCrumbMenu);

```

This will create a menu.  When the item is select the 'id' is set to the attribute page of the element.

Trap this and you can use it to change the page.

If the help button is pressed it calls:

```
  app.openHelpPage();
````

Could be written better but works well with my application.  So good enough for now.