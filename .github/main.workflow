workflow "Publish Storybook" {
  on = "push"
  resolves = ["Deploy Storybook"]
}

action "Install dependencies" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "install"
}

action "Deploy Storybook" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "deploy-storybook"
  secrets = ["GITHUB_TOKEN"]
  needs = ["Install dependencies"]
}
