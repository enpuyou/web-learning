# Angular

To install Angular CLI: 

```bash
npm install -g @angular/cli
```

To create a workspace and initial application:

```bash
ng new my-app
```

> The `ng new` command prompts you for information about features to
include in the initial app. Accept the defaults by pressing the
`Enter` or `Return` key.
>
> The Angular CLI installs the necessary Angular npm packages and other
dependencies. This can take a few minutes. The CLI creates a new workspace and
a simple Welcome app, ready to run.
>
> The Angular CLI includes a server, so that you can easily build and serve
your app locally.

Launch the server by `ng serve`, with the `--open` option:

```bash
ng serve --open
```

>The `ng serve` command launches the server, watches your files, and rebuilds
the app as you make changes to those files.
The `--open` (or just `-o`) option automatically opens your browser to
`http://localhost:4200/`.
