exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/licenses",
    toPath: "/licenses-112019.html",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/privacy",
    toPath: "/privacy-policy-042020.html",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/imprint",
    toPath: "/imprint.html",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/terms",
    toPath: "/terms-of-use-042020.html",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/cookie",
    toPath: "/cookie-policy-042020.html",
    isPermanent: true,
  })
}
