<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <!-- this XSL stylesheet matches the <JavacoTea> tag in an associated XML
	file and replaces it with the HTML contents of the template. -->
    <xsl:template match="/">
                <table id="menuTable" border="1" class="indent">
                    <thead>
                        <tr>
                            <th colspan="5">Monster List</th>
                        </tr>
                        <tr>
                            <th>Delete</th>
                            <th>Type</th>
                            <th>Size</th>
                            <th>Challenger Lvl</th>
                            <th>exp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/rpgMonsters/monster">
                            <tr id="nameRow">
                                <td colspan="6" align="center">
                                    <xsl:value-of select="name" />
                                </td>
                            </tr>
                            <tr  id="statusRow">
                                <td align="center">
                                    <input id="{position()}" name="delete" type="button" value="Delete" onclick="select_row({position()})"/>
                                </td>
                                <td>
                                    <xsl:value-of select="type" />
                                </td>
                                <td align="center">
                                    <xsl:value-of select="size" />
                                </td>
                                <td align="center">
                                    <xsl:value-of select="challengeLevel" />
                                </td>
                                 <td align="center">
                                    <xsl:value-of select="exp" />
                                </td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
    </xsl:template>
</xsl:stylesheet>