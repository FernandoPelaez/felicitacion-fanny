export const birthdayLoginData = {
  access: {
    password: "Tequiero",
    successRoute: "/preparando",
  },

  content: {
    badge: "Acceso especial",
    title: "Antes de entrar...",
    subtitle:
      "Necesito confirmar que eres la cumpleañera más bonita de esta historia.",

    birthdayLabel: "Tu fecha de cumpleaños",
    birthdayPlaceholder: "Selecciona tu fecha",

    passwordLabel: "Contraseña secreta",
    passwordPlaceholder: "Tequiero",

    buttonText: "¿Eres tú? 💗",
    loadingText: "Preparando algo bonito...",

    helperText: "Pista: es una palabra que debería decirte más seguido.",
  },

  errors: {
    birthdayRequired: "Primero pon tu fecha de cumpleaños 💗",
    passwordRequired: "Falta la contraseña secreta 👀",
    invalidPassword: "Mmm... esa no es la palabra mágica.",
  },
} as const;

export const birthdayCountdownData = {
  route: "/felicitacion",

  content: {
    badge: "Preparando tu sorpresa",
    title: "¿Estás lista, mi nenita hermosa?",
    subtitle:
      "En unos segundos se abre algo hecho con mucho cariño, solo para ti.",
    finalText: "¡Aquí vamos! 💗",
  },
} as const;
