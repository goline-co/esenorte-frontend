import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as renderSlot, f as addAttribute, g as renderHead, h as createAstro } from '../chunks/astro/server_udlVfwa8.mjs';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { X, Menu, Search, Calendar } from 'lucide-react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center font-bold justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-primary bg-background shadow-sm hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-12 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        children
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
SheetFooter.displayName = "SheetFooter";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

function Navigation() {
  return /* @__PURE__ */ jsxs(Sheet, { children: [
    /* @__PURE__ */ jsx(SheetTrigger, { children: /* @__PURE__ */ jsx(Button, { children: /* @__PURE__ */ jsx(Menu, { className: "w-4 h-4" }) }) }),
    /* @__PURE__ */ jsxs(SheetContent, { className: "flex flex-col justify-end items-end", children: [
      /* @__PURE__ */ jsx("nav", { className: "flex flex-col mb-8 w-full", children: /* @__PURE__ */ jsxs("ul", { className: "flex  flex-col gap-4 text-end list-none justify-center items-center", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Sobre Nosotros" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Planes y Convenios" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Servicio al Cliente" }) })
      ] }) }),
      /* @__PURE__ */ jsx(SheetFooter, { className: "w-full", children: /* @__PURE__ */ jsx(Button, { className: "w-full", children: "Reserva a tu especilista" }) })
    ] })
  ] });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between gap-1 w-full px-4 md:px-12 py-4 bg-blue-50"> <img src="/logo.png" alt="ese norte tress"> <nav class="hidden md:grid place-items-center"> <ul class="flex gap-4 list-none justify-center items-center"> <li> <a href="#">${"Sobre Nosotros"}</a> </li> <li> <a href="#">${"Planes y Convenios"}</a> </li> <li> <a href="#">${"Servicio al Cliente"}</a> </li> </ul> </nav> <div class="flex gap-4 justify-center items-center"> ${renderComponent($$result, "Button", Button, { "variant": "outline", "className": "bg-blue-50 border-2 px-3 aspect-square md:aspect-auto" }, { "default": ($$result2) => renderTemplate` <span class="hidden md:inline ">${"Buscador"}</span> ${renderComponent($$result2, "Search", Search, { "class:list": "w-4 h-4" })} ` })} ${renderComponent($$result, "Button", Button, { "className": "hidden md:flex" }, { "default": ($$result2) => renderTemplate`${"Reserva a tu especilista"}` })} <div class="md:hidden"> ${renderComponent($$result, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/groobart/Desktop/VCode/Github/GoLine/eseNorteWeb/eseNorteWeb/src/components/Navigation", "client:component-export": "default" })} </div> </div> </header>`;
}, "/Users/groobart/Desktop/VCode/Github/GoLine/eseNorteWeb/eseNorteWeb/src/components/Header.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Users/groobart/Desktop/VCode/Github/GoLine/eseNorteWeb/eseNorteWeb/src/components/Main.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer>
Footer
</footer>`;
}, "/Users/groobart/Desktop/VCode/Github/GoLine/eseNorteWeb/eseNorteWeb/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="grid h-dvh grid-rows-[auto_1fr_auto] relative"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Main", $$Main, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/groobart/Desktop/VCode/Github/GoLine/eseNorteWeb/eseNorteWeb/src/layouts/Layout.astro", void 0);

const $$Cover = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative bg-blue-50 md:flex md:flex-col justify-center gap-4 md:gap-12 md:h-[calc(100vh_-_91px)] md:min-h-[768px]"> <article class="lg:w-2/5 md:px-16 px-4"> <h2 class="text-3xl lg:text-6xl font-regular text-zinc-700 mb-4 ">
Cuida tu salud con
</h2> <h1 class="text-4xl lg:text-6xl font-regular text-blue-600 mb-6">
Ese Norte 3
</h1> <p class="text-base text-zinc-500 mb-8">
Tenemos un equipo comprometido y dedicado que trabaja incansablemente para ofrecer la mejor atención.
</p> ${renderComponent($$result, "Button", Button, { "className": "min-w-40 px-8" }, { "default": ($$result2) => renderTemplate`${"Reserva a tu hora"}${renderComponent($$result2, "Calendar", Calendar, {})} ` })} </article> <article class="md:absolute md:bottom-0 md:right-0"> <img src="/cover.png" alt="Equipo de doctores" class="w-full md:w-auto"> </article> </section>`;
}, "/Users/groobart/Desktop/VCode/Github/GoLine/eseNorteWeb/eseNorteWeb/src/sections/Cover.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="services" class="bg-white py-12 px-4 md:px-12"> <h2 class="text-left text-4xl font-normal mb-4 text-zinc-700">
Conoce nuestros servicios
</h2> <p class="text-start text-base text-zinc-500 mb-8">
Médico general que cuente con disponibilidad de tiempo para laborar en la
    ESE NORTE 3, punto de atención Padilla, Cauca.
</p> <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"> <div> <img class="rounded-lg" src="/service1.png" alt="Clínicas Dentales"> <h3 class="text-lg font-normal text-start mt-4">Clínicas Dentales</h3> </div> <div> <img class="rounded-lg" src="/service2.png" alt="Consultas Médicas"> <h3 class="text-lg font-normal text-start mt-4">Consultas Médicas</h3> </div> <div> <img class="rounded-lg" src="/service3.png" alt="Servicio de Pediatría"> <h3 class="text-lg font-normal text-start mt-4">Servicio de Pediatría</h3> </div> <div> <img class="rounded-lg" src="/service4.png" alt="Exámenes de Laboratorio"> <h3 class="text-lg font-normal text-start mt-4">
Exámenes de Laboratorio
</h3> </div> </div> <div class="flex flex-col items-end gap-[3.75rem] mt-[1.25rem]"> <p class="text-base text-zinc-500 max-w-lg md:text-right">
En nuestra extensa red de centros médicos te ofrecemos un completo equipo
      de médicos y especialistas preparados para atenderte a ti y a tu familia.
</p> </div> </section>`;
}, "/Users/groobart/Desktop/VCode/Github/GoLine/eseNorteWeb/eseNorteWeb/src/sections/Services.astro", void 0);

const $$Recruitment = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="recruitment" class="relative py-12 md:px-20 bg-zinc-100 h-[500px] flex items-center justify-end md:my-20"> <div class="flex-shrink-0 w-full lg:w-[400px] md:absolute left-40 bottom-12 hidden md:block"> <img src="/doctors-walking.png" alt="Equipo médico caminando" class="rounded-lg w-full object-cover"> </div> <div class="lg:w-1/2 text-center lg:text-left prose px-4"> <h2 class="text-4xl font-regular text-zinc-700 mb-4 leading-tight font-normal">
¿Eres Médico y quieres trabajar con nosotros?
</h2> <p class="text-base text-zinc-500 mb-6 leading-relaxed">
Nuestro propósito es ayudar a las personas a tener vidas más largas,
        sanas, felices y crear un mundo mejor. Además, queremos ser la compañía
        de salud más centrada en el cliente del mundo. ¡Acompáñanos en este desafío!
</p> ${renderComponent($$result, "Button", Button, {}, { "default": ($$result2) => renderTemplate`${"Ver m\xE1s informaci\xF3n"}` })} </div> </section>`;
}, "/Users/groobart/Desktop/VCode/Github/GoLine/eseNorteWeb/eseNorteWeb/src/sections/Recruitment.astro", void 0);

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="blog" class="py-16 bg-white"> <div class="container mx-auto px-4"> <!-- Título --> <h2 class="text-start text-4xl text-zinc-700 mb-8">
Cuida tu salud con Ese Norte 3
</h2> <div class="flex justify-right  gap-4 mb-12 text-sm overflow-x-auto w-screen pb-4 pr-4"> ${renderComponent($$result, "Button", Button, { "className": "px-6 py-2 rounded-full text-white bg-primary hover:bg-primary/80 transition" }, { "default": ($$result2) => renderTemplate`
Todos
` })} ${renderComponent($$result, "Button", Button, { "className": "px-6 py-2 rounded-full text-gray-700 bg-gray-200 hover:bg-gray-300 transition" }, { "default": ($$result2) => renderTemplate`
Tratamientos
` })} ${renderComponent($$result, "Button", Button, { "className": "px-6 py-2 rounded-full text-gray-700 bg-gray-200 hover:bg-gray-300 transition" }, { "default": ($$result2) => renderTemplate`
Salud Mujer
` })} ${renderComponent($$result, "Button", Button, { "className": "px-6 py-2 rounded-full text-gray-700 bg-gray-200 hover:bg-gray-300 transition" }, { "default": ($$result2) => renderTemplate`
Salud Hombre
` })} ${renderComponent($$result, "Button", Button, { "className": "px-6 py-2 rounded-full text-gray-700 bg-gray-200 hover:bg-gray-300 transition" }, { "default": ($$result2) => renderTemplate`
Salud Mental
` })} </div> <!-- Lista de artículos --> <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Tarjeta de artículo --> ${Array.from({ length: 6 }).map((_) => renderTemplate`<article class="bg-white rounded-sm transition overflow-hidden"> <div class="relative"> <img src="/article-cardio.png" alt="Artículo" class="w-full object-cover aspect-square"> <div class="bg-gray-100 text-zinc-700 text-xs rounded-full md:px-6 px-4 md:py-1 mb-4 absolute top-2 right-2 md:top-4 md:right-4 h-8 lg:h-[40px] flex items-center">
Tratamientos
</div> </div> <div> <h3 class="text-lg font-normal text-start mt-4 mb-4">
¿Qué es la hipertensión arterial?
</h3> <p class="text-zinc-500 text-sm">
En IntegraMédica cuidamos la salud de tu corazón. Por eso,
                contamos con un gran equipo de médicos cardiólogos...
</p> <a href="#" class="text-blue-600 text-sm font-medium mt-4 inline-flex items-center">
Ver más →
</a> </div> </article>`)} </div> <div class="text-center mt-12"> ${renderComponent($$result, "Button", Button, {}, { "default": ($$result2) => renderTemplate`${"Ver m\xE1s informaci\xF3n"}` })} </div> </div> </section>`;
}, "/Users/groobart/Desktop/VCode/Github/GoLine/eseNorteWeb/eseNorteWeb/src/sections/Blog.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ese Norte 3" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Cover", $$Cover, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Recruitment", $$Recruitment, {})} ${renderComponent($$result2, "Blog", $$Blog, {})} ` })}`;
}, "/Users/groobart/Desktop/VCode/Github/GoLine/eseNorteWeb/eseNorteWeb/src/pages/index.astro", void 0);

const $$file = "/Users/groobart/Desktop/VCode/Github/GoLine/eseNorteWeb/eseNorteWeb/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
