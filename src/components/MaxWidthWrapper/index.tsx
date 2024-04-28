export default function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return <div className="w-full max-w-[1280px] my-0 mx-auto">{children}</div>;
}
