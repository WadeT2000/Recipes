import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';



// test('As a Chef, I want to store my recipes so that I can keep track of them.', () => {
  
//   // 1. render the landing page
//   render(<App />);

//   // 2. wait for the page to load
//   // Implied in this case, nothing to wait for

//   // 3. Then I should see a heading that reads "My Recipes"
//   let recipeHeader = screen.getByText('My Recipes');
//   expect(recipeHeader).toBeInTheDocument();

//   // 4. And I should see text beneath the heading that reads "There are no recipes to list" 
//   let recipeList = screen.getByText('There are no recipes to list.');
//   expect(recipeList).toBeInTheDocument();

//   // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
//   expect(recipeHeader.compareDocumentPosition(recipeList)).toBe(4);
// });

// test("contains an add recipe button", () => {
//   // 1. render the landing page
//   render(<App />);

//   // 2. wait for the page to load (implied, no async operations)

//   // 3. Then I should see a button that says "Add Recipe" beneath the "My Recipes" heading.
//   let recipeHeader = screen.getByText('My Recipes');
//   let button = screen.getByRole('button', {name: 'Add Recipe'});
  
//   expect(button).toBeInTheDocument();
//   // being particular, make sure the heading is above the button (at least in html)
//   expect(recipeHeader.compareDocumentPosition(button)).toBe(4);
// })

// test("contains an add recipe button that when clicked opens a form", async () => {
//   // render the landing page
//   render(<App />);

//   // wait for the page to load (implied, no async operations)

//   // click Add Recipe button
//   let button = screen.getByRole('button', {name: 'Add Recipe'});
//   userEvent.click(button);

//   // Wait for the form to appear on the screen (override the default of 1000ms as an example)
//   let form = await screen.findByRole('form', undefined, {timeout:3000});

//   // Verify the form appears
//   expect(form).toBeInTheDocument();

//   // Then I should see a form with fields: "Recipe Name" and "Recipe Instructions"
//   expect(screen.getByRole('textbox', {name: /Recipe name/i})).toBeInTheDocument();
//   expect(screen.getByRole('textbox', {name: /instructions/i})).toBeInTheDocument();
  
//   // And the "Add Recipe" button should no longer be on the screen.
//   // Use queryBy instead of getBy because getBy throws an error when it doesn't have exactly 1 match
//   button = screen.queryByRole('button', {name: 'Add Recipe'});
//   expect(button).toBeNull();
// });

// test("contains an add recipe button that when clicked opens a form", async () => {
//   // render the landing page
//   render(<App />);

//   // wait for the page to load (implied, no async operations)

//   // click Add Recipe button
//   let button = screen.getByRole('button', {name: 'Add Recipe'});
//   userEvent.click(button);

//   // Wait for the form to appear on the screen (override the default of 1000ms as an example)
//   let place = await screen.findByRole('form', undefined, {timeout:3000});

//   // Verify the form appears
//   expect(place).toBeInTheDocument();

//   // Then I should see a form with fields: "Recipe Name" and "Recipe Instructions"
//   expect(screen.getByRole('textbox', {name: /Recipe name/i})).toBeInTheDocument();
//   expect(screen.getByRole('textbox', {name: /instructions/i})).toBeInTheDocument();

//   // get the textbox
//   let recipeNameBox = screen.getByRole('textbox', { name: /Recipe name/i });
//   let instructionsBox = screen.getByRole('textbox', { name: /instructions/i });

//   userEvent.type(recipeNameBox, 'Tofu Scramble Tacos');
//   userEvent.type(instructionsBox, 'Mix tofu with spices and vegetables.');

// let submitButton = screen.getByRole('button', { type: 'submit' });
//   userEvent.click(submitButton);

// // Wait for the form to appear on the screen (override the default of 1000ms as an example)
// let addedRecipe = await screen.findByText('Tofu Scramble Tacos');
//   expect(addedRecipe).toBeInTheDocument();
 
// // Use regex to match the text within the li element
// let addedInstructions = await screen.findByText(/Mix tofu with spices and vegetables\./i);
// expect(addedInstructions).toBeInTheDocument();

// });

test('As Chef Boyardee, I want to see all of the recipes I’ve come up with so that I don’t forget them', async () => {
  render(<App />);

  // Add first recipe
  let button = screen.getByRole('button', { name: 'Add Recipe' });
  userEvent.click(button);

    // Wait for the form to appear on the screen (override the default of 1000ms as an example)
  let place = await screen.findByRole('form', undefined, {timeout:3000});

  // Verify the form appears
  expect(place).toBeInTheDocument();

  // Then I should see a form with fields: "Recipe Name" and "Recipe Instructions"
  expect(screen.getByRole('textbox', {name: /Recipe name/i})).toBeInTheDocument();
  expect(screen.getByRole('textbox', {name: /instructions/i})).toBeInTheDocument();

  let recipeNameBox = screen.getByRole('textbox', { name: /Recipe name/i });
  let instructionsBox = screen.getByRole('textbox', { name: /instructions/i });

  userEvent.type(recipeNameBox, 'Tofu Scramble Tacos');
  userEvent.type(instructionsBox, 'Mix tofu with spices and vegetables.');

  let submitButton = screen.getByRole('button', { type: 'submit' });
  userEvent.click(submitButton);

  // Wait for the form to appear on the screen (override the default of 1000ms as an example)
let addedRecipe = await screen.findByText('Tofu Scramble Tacos');
  expect(addedRecipe).toBeInTheDocument();
 
// Use regex to match the text within the li element
let addedInstructions = await screen.findByText(/Mix tofu with spices and vegetables\./i);
expect(addedInstructions).toBeInTheDocument()

  // Add second recipe
  button = screen.getByRole('button', { name: 'Add Recipe' });
  userEvent.click(button);

  // Wait for the form to appear on the screen (override the default of 1000ms as an example)
  place = await screen.findByRole('form', undefined, {timeout:3000});

  // Verify the form appears
  expect(place).toBeInTheDocument(); 

  recipeNameBox = screen.getByRole('textbox', { name: /Recipe name/i });
  instructionsBox = screen.getByRole('textbox', { name: /instructions/i });

  // Then I should see a form with fields: "Recipe Name" and "Recipe Instructions"
  expect(screen.getByRole('textbox', {name: /Recipe name/i})).toBeInTheDocument();
  expect(screen.getByRole('textbox', {name: /instructions/i})).toBeInTheDocument();

  userEvent.type(recipeNameBox, 'Pasta Primavera');
  userEvent.type(instructionsBox, 'Cook pasta and mix with fresh vegetables.');

  submitButton = screen.getByRole('button', { type: 'submit' });
  userEvent.click(submitButton);

  // Verify both recipes are displayed
  expect(await screen.findByText('Tofu Scramble Tacos')).toBeInTheDocument();
  expect(screen.getByText(/Mix tofu with spices and vegetables\./i)).toBeInTheDocument();

  expect(await screen.findByText('Pasta Primavera')).toBeInTheDocument();
  expect(screen.getByText(/Cook pasta and mix with fresh vegetables\./i)).toBeInTheDocument();
});