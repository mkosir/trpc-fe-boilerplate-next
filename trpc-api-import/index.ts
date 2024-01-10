import fs from 'fs';
import { Octokit } from 'octokit';

type TrpcApiDist = {
  owner: string;
  repository: string;
  filePaths: ReadonlyArray<{
    sourcePath: string;
    targetPath: string;
  }>;
};

const TRPC_API_DIST = {
  owner: 'mkosir',
  repository: 'trpc-api-boilerplate',
  filePaths: [
    {
      sourcePath: 'trpc-api-export/dist/index.d.ts',
      targetPath: 'src/common/trpc-api-boilerplate/api-types/index.d.ts',
    },
    {
      sourcePath: 'trpc-api-export/dist/index.js',
      targetPath: 'src/common/trpc-api-boilerplate/api-types/index.js',
    },
  ],
} as const satisfies TrpcApiDist;

const trpcApiImport = () => {
  const octokit = new Octokit({
    // Provide token if using private GitHub repository
    // auth: <GITHUB_TOKEN>,
  });

  void TRPC_API_DIST.filePaths.map(async (trpcApiFilePath) => {
    const octokitResponse = await octokit.rest.repos.getContent({
      owner: TRPC_API_DIST.owner,
      repo: TRPC_API_DIST.repository,
      path: trpcApiFilePath.sourcePath,
    });

    if (!('content' in octokitResponse.data)) {
      throw Error(`Error: No content available to download - File ${trpcApiFilePath.sourcePath}.`);
    }

    const decodedFileContent = Buffer.from(octokitResponse.data.content, 'base64');

    fs.writeFileSync(trpcApiFilePath.targetPath, decodedFileContent);
  });

  console.log('### tRPC API successfully imported. ###');
};

trpcApiImport();
