import React from "react";

type LinkItem = {
	id: string;
	title: string;
	description?: string;
	href: string;
};

const items: LinkItem[] = [
	{
		id: "1",
		title: "Project Alpha",
		description: "A modern web app built with React + Vite.",
		href: "#",
	},
	{
		id: "2",
		title: "Design System",
		description: "Reusable components and tokens.",
		href: "#",
	},
	{
		id: "3",
		title: "Open Source",
		description: "Libraries and tools on GitHub.",
		href: "#",
	},
];

export default function PortfolioLinkSection() {
	return (
		<section
			aria-labelledby="portfolio-heading"
			className="#E9F0F0 pt-4"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					<h2
						id="portfolio-heading"
						className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
					>
						Portfolio
					</h2>
					<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
						Selected projects and links.
					</p>
				</div>

				<ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((item) => (
						<li key={item.id} className="relative">
							<a
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								className="block rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 hover:shadow-lg transition-shadow duration-150"
							>
								<div className="flex items-start justify-between">
									<div>
										<h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
											{item.title}
										</h3>
										{item.description && (
											<p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
												{item.description}
											</p>
										)}
									</div>

									<svg
										className="w-5 h-5 text-slate-400 shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M14 5l7 7m0 0v6a2 2 0 0 1-2 2h-6m-7-7L3 19m0 0v-6a2 2 0 0 1 2-2h6"
										/>
									</svg>
								</div>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}