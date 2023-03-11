const { I, homePage, authenticatedPage } = inject();
// Add in your custom step files

const userCpf = "073.785.670-00"
const userBirthDate = "01/01/1990"
const userPassword = "123456"
const newName = "Automated Test Profile Change"

Given('the user previously registered in home page', () => {
  homePage.isLoaded();
});

When('enter the authentication data', () => {
  homePage.logar(userCpf, userBirthDate);

});

Then('he is in the authenticated area', () => {
  authenticatedPage.userVerified(userCpf);
});

// ------------------------------------------------------------------

Given('the user logged', () => {
  homePage.isLoaded();
  homePage.logar(userCpf, userBirthDate);
});

When('he sign out', () => {
  authenticatedPage.signOut();
});

Then('he is in the home page', () => {
  I.amOnPage('/');
});


// --------------------------------------------------

When('he change profile data', () => {
  authenticatedPage.updateProfile(newName, userPassword)
});

Then('the profile is updated', async () => {
  authenticatedPage.signOut();
  homePage.isLoaded();
  homePage.logar(userCpf, userBirthDate);

  await authenticatedPage.checkUpdatedProfile(newName, userPassword);
});
