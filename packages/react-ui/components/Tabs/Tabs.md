```jsx harmony
const initialState = { active: 'fuji' };

<Tabs value={state.active} onValueChange={v => setState({ active: v })}>
  <Tabs.Tab id="fuji">🌋 Fuji</Tabs.Tab>
  <Tabs.Tab id="tahat">⛰ Tahat</Tabs.Tab>
  <Tabs.Tab id="alps">🗻 Alps</Tabs.Tab>
</Tabs>;
```

Можно передавать свои компоненты в качестве табов, например `NavLink` из `react-router`

```jsx harmony
const initialState = { active: '/fuji' };

const NavLink = props => (
  <a
    {...props}
    onClick={e => {
      e.preventDefault();
      props.onClick(e);
    }}
  />
);
const TabLink = ({ id, children }) => (
  <Tabs.Tab id={id} component={props => <NavLink {...props} to={props.id} />}>
    {children}
  </Tabs.Tab>
);

<Tabs value={state.active} onValueChange={v => setState({ active: v })}>
  <TabLink id="/fuji">🌋 Fuji</TabLink>
  <TabLink id="/tahat">⛰ Tahat</TabLink>
  <TabLink id="/alps">🗻 Alps</TabLink>
</Tabs>;
```
