function Footer({userMsg, colors}) {
    let styles = { color: colors };
  return (
    <footer>
      <p>© 2023 My Website</p>
      <p style={styles}>{userMsg}</p>
    </footer>
  );
}
export default Footer;