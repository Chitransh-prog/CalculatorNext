export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-gray-400 py-4 px-6 text-center border-t border-gray-800">
      <p className="text-sm">
        © {new Date().getFullYear()} CalcX — Built by Chitransh
      </p>
    </footer>
  );
}
