import fs from 'fs';
import { Project, PropertyDeclaration, SyntaxKind } from 'ts-morph';

// [name, path]

interface EventDoc {
  name: string;
  parent: string;
  properties: PropertyDeclaration[];
}

const project = new Project({
  tsConfigFilePath: './tsconfig.json',
});

reportProgress('Reading files');

const cxEvent = project.getSourceFileOrThrow(
  'projects/core/src/event/cx-event.ts'
);

const pageEvent = project.getSourceFileOrThrow(
  'projects/storefrontlib/src/events/page/page.events.ts'
);

const files = project.getSourceFiles([
  'projects/core/**/*.ts',
  'projects/storefrontlib/**/*.ts',
  '!projects/**/*.spec.ts',
  'feature-libs/**/*.ts',
  '!feature-libs/**/*.spec.ts',
  'integration-libs/**/*.ts',
  '!integration-libs/**/*.spec.ts',
]);

const cxEventName = cxEvent
  .getClasses()[0]
  .getChildrenOfKind(SyntaxKind.Identifier)[0]
  .getText();

const pageEventName = pageEvent
  .getClasses()[0]
  .getChildrenOfKind(SyntaxKind.Identifier)[0]
  .getText();

let superEvents = [cxEventName, pageEventName];
let events = new Array<EventDoc>();

let content = '';

reportProgress('Cataloging events');

console.log(getSpartacusRepo());

files.forEach((sourceFile) => {
  sourceFile.getClasses().forEach((classDeclaration) => {
    const supperClass = classDeclaration
      .getHeritageClauseByKind(SyntaxKind.ExtendsKeyword)
      ?.getTypeNodes()[0];

    if (supperClass) {
      // Dig on the parent until it has no parents and check if CxEvent
      if (superEvents.includes(supperClass?.getExpression()?.getText())) {
        // Get JsDocs
        // if (classDeclaration.getJsDocs()[0]?.getText())
        //   addToContent(classDeclaration.getJsDocs()[0]?.getText());

        addToContent([
          classDeclaration.getName() as string,
          removeFirstSlash(
            sourceFile.getFilePath().split(getSpartacusRepo())[1]
          ),
        ]);

        superEvents.push(classDeclaration.getName() as string);
      }
      events.push({
        name: classDeclaration.getName() as string,
        parent: supperClass.getExpression()?.getText(),
        properties: classDeclaration.getProperties(),
      });
    }
  });
});

writeToFile(content);

/**
 * Adds a new line to the text
 * @param newText
 */
function addToContent(newText: string[]): void {
  content += '\n' + newText;
}

function writeToFile(fileContent: string) {
  reportProgress('Writing to file');
  fs.writeFileSync('events.md', fileContent);
}

function getSpartacusRepo(): string {
  const filePath = __filename.split('/scripts')[0].split('/');
  return filePath[filePath.length - 1];
}

function removeFirstSlash(pathToUpdate: string): string {
  if (pathToUpdate.startsWith('/'))
    return pathToUpdate.substring(1, pathToUpdate.length);
  return pathToUpdate;
}

/**
 * Log script step
 *
 * @param message step to log
 */
export function reportProgress(message: string): void {
  console.log(`\n${message}`);
}

// else if (
//   !!(supperClass
//     .getExpression()
//     .getSymbol()
//     ?.getDeclarations()[0] as ClassDeclaration).getHeritageClauseByKind
// ) {
//   if (
//     superEvents.includes(
//       (supperClass
//         .getExpression()
//         .getSymbol()
//         ?.getDeclarations()[0] as ClassDeclaration)
//         .getHeritageClauseByKind(SyntaxKind.ExtendsKeyword)
//         ?.getTypeNodes()[0]
//         .getExpression()
//         ?.getText() as string
//     )
//   ) {
//     console.log(
//       'OCBLIFE',
//       classDeclaration.getName(),
//       (supperClass
//         .getExpression()
//         .getSymbol()
//         ?.getDeclarations()[0] as ClassDeclaration)
//         .getHeritageClauseByKind(SyntaxKind.ExtendsKeyword)
//         ?.getTypeNodes()[0]
//         .getExpression()
//         ?.getText()
//     );
//     superEvents.push(classDeclaration.getName() as string);
//   }
// }
