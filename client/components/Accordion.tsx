import {TouchableOpacity, View, Text} from 'react-native';
import {ChevronDownIcon, ChevronUpIcon} from 'react-native-heroicons/outline';
import {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../constant';

type AccordionItemPros = PropsWithChildren<{
  title: string;
}>;

function AccordionItem({title}: AccordionItemPros): JSX.Element {
  //expanded state for the accordion header
  const [expanded, setExpanded] = useState(false);

  //open and close the accordion
  function toggleItem() {
    setExpanded(prev => !prev);
  }

  //body to be displayed based on tthe expanded state
  const body = (
    <View style={styles.accordBody}>
      <Text style={styles.accordBodyText}>
        Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are
        made from yeast dough, shaped into balls and deep-fried until golden
        brown. It has a doughnut-like texture but slightly o....Read more
      </Text>
    </View>
  );

  return (
    <View>
      <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
        <Text style={styles.accordTitle}>{title}</Text>
        {expanded ? (
          <ChevronUpIcon size={16} color={COLORS.black} />
        ) : (
          <ChevronDownIcon size={16} color={COLORS.black} />
        )}
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accordHeader: {
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e5e9',
  },
  accordTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  accordBody: {
    paddingVertical: 12,
  },
  accordBodyText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#4A4A4A',
    textAlign: 'justify',
  },
  textSmall: {
    fontSize: 16,
  },
  seperator: {
    height: 12,
  },
});

export default AccordionItem;
