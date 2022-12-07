export default function SimpleTimeline() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4">
        <div className="mt-[-4px] font-mono text-gray-600">Jun 2022</div>
        <div className="flex flex-col items-center">
          <div className="h-4 w-4 rounded-full border-2 border-black pb-3 dark:border-white"></div>
          <div className="h-full w-0.5 bg-gray-600"></div>
        </div>
        <div className="pb-4">
          <h3 className="mt-[-4px] mb-2 font-bold">
            Software Engineering Technical Lead
          </h3>
          <div className="mb-2 text-gray-600">
            Lead, mentored, and inspired an engineering team to perform at the
            highest level and deliver world-class products
          </div>
          <div className="mb-2 text-gray-600">
            Provided technical leadership to an engineering team to implement
            software solutions to business problems
          </div>
          <div className="text-gray-600">
            Participated in establishing company architectural standards and
            software development best practices
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="mt-[-4px] font-mono text-gray-600">Dec 2022</div>
        <div className="flex flex-col items-center">
          <div className="h-4 w-4 rounded-full border-2 border-black pb-3 dark:border-white"></div>
          <div className="h-full w-0.5 bg-gray-600"></div>
        </div>
        <div className="pb-4">
          <div className="mt-[-4px] mb-2 font-bold">Software Test Engineer</div>
          <div className="mb-2 text-gray-600">
            Designed and developed an automated test framework from the ground
            up with Cypress
          </div>
          <div className="mb-2 text-gray-600">
            Created and maintained automated test scripts for end to end,
            integration, security, performance, and component tests
          </div>
          <div className="text-gray-600">
            Implemented and maintained a GitHub Action to integrate Cypress
            tests into the CI pipeline
          </div>
        </div>
      </div>
    </div>
  );
}
