exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/licenses",
    toPath: "/licenses-112019.html",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/privacy",
    toPath: "/privacy-policy-012020.html",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/imprint",
    toPath: "/imprint.html",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/terms",
    toPath: "/terms-of-use-032020_1.html",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/cookie",
    toPath: "/cookie-policy-012020.html",
    isPermanent: true,
  })
}
