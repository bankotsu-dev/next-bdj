import NavLinks from '@/app/components/darkest-dungeon/nav-links';

export default function SideNav() {
  return (
    <div className="flex w-full flex-col bg-gray-800">
      <div className="flex grow flex-row justify-center space-x-2 bg-gray-800">
        <NavLinks />
      </div>
    </div>
  );
}
